import json
import os
import codecs


JSON = 'json'
JSON_DIR = "./output"
COMPARE = 'compare.json'
NAME1 = 'Processed'
NAME2 = 'processed'
SWEEP_SHEET = 'Performance Sweeping Tables'
COMPARE_SHEET = 'sheet-1'
HEATMAP_JSON = 'Processed_heatmap'
HEATMAP_BS = 'BS'
HEATMAP_CPI = 'CPI'
HEATMAP_DATA = 'DATA'
MAX_MIN = 'MAX_MIN'


_file_list = os.listdir(JSON_DIR)
json_file_list = []


def get_json_file():
    for file_name in _file_list:
        if JSON in file_name and NAME1 not in file_name and NAME2 not in file_name:
            json_file_list.append(file_name)
    return json_file_list


def gen_compare_data(raw_data, process_name, m):
    machine_list = raw_data[0][1:]
    table_context = raw_data[1:]
    compare_dict = {}
    MACHINE = []
    BS = []
    THROUGHPUT = []
    for machines in machine_list:
        MACHINE.append(machines.split(" ")[0] + "_" + machines.split(" ")[1])
    temp_th1 = []
    for iters in range(len(table_context)):
        this_list = table_context[iters]
        if 'batch_size' in this_list:
            BS.append(int(this_list[1]))
        if 'Normalized Max Throughput' in this_list:
            temp_th1.append(this_list)
    for k in range(len(MACHINE)):
        temp_th2 = []
        for i in range(len(temp_th1)):
            temp_th2.append(round(float(temp_th1[i][k+1]), 2))
        THROUGHPUT.append({MACHINE[k]: temp_th2})
    compare_dict['BS'] = BS
    compare_dict['THROUGHPUT'] = THROUGHPUT
    gen_file_name = "Processed_{}_{}.json".format(process_name, m)
    with codecs.open(gen_file_name, "w", "utf-8") as gcd:
        json.dump(compare_dict, gcd)


def gen_heatmap_data(table_dict, i):
    raw_table = table_dict[0]
    raw_bs = raw_table[0][2:]
    heatmap_data = {}
    BS = []
    for bs_data in raw_bs:
        BS.append(int(bs_data.split('=')[1]))
    heatmap_data[HEATMAP_BS] = BS
    CPI = []
    for raw_cpi in raw_table[1:]:
        if raw_cpi == []:
            continue
        CPI.append(int(raw_cpi[0].split('=')[1]))
    heatmap_data[HEATMAP_CPI] = CPI
    temp_data = []
    for raw_data in raw_table[1:]:
        if raw_data == []:
            continue
        for datas in raw_data[2:]:
            temp_data.append(round(float(datas), 2))
    max_data = max(temp_data)
    min_data = min(temp_data)
    DATA = []
    k = 0
    for m in range(len(CPI)):
        for n in range(len(BS)):
            DATA.append([int(n), int(m), temp_data[k]])
            k += 1
    heatmap_data[HEATMAP_DATA] = DATA
    heatmap_data[MAX_MIN] = [max_data, min_data]
    gen_file_name = "{}_{}.json".format(HEATMAP_JSON, i)
    with codecs.open(gen_file_name, "w", "utf-8") as pjs:
        json.dump(heatmap_data, pjs)


def process_json(data, sheet, total_dict, m):
    start = 0
    end = 0
    list_num = 0
    table_list = {}
    em_num = 0
    em_list = []
    temp_dict1 = []
    for em_keys in data:
        list_num += 1
        if em_keys == []:
            em_list.append(list_num)
            em_num += 1
    if em_list != []:
        for num_dict, num_list in enumerate(em_list):
            end = em_list[num_dict]
            table_list[num_dict] = data[start:end]
            start = em_list[num_dict]
        end = len(data)
        table_list[num_dict+1] = data[start:end]
    else:
        end = len(data)
        table_list[0] = data[0:end]             
    head_table = table_list[0][0]
    for num in range(len(table_list)):
        this_table = table_list[num]
        for this_list in this_table:
            if this_list == head_table:
                continue
            temp_dict1_1 = {}
            if this_list == []:
                for i in range(len(head_table)):
                    temp_dict1_1[head_table[i]] = ""
                temp_dict1.append(temp_dict1_1)
            else:
                for index, values in enumerate(this_list):
                    temp_dict1_1[head_table[index]] = values
                temp_dict1.append(temp_dict1_1)
    total_dict[sheet] = temp_dict1
    if sheet == SWEEP_SHEET:
        gen_heatmap_data(table_list, m)


def gen_new_json():
    json_file_list = get_json_file()
    m = 0
    for json_file in json_file_list:
        print("processing <{}> file ...".format(json_file))
        total_dict = {}
        process_name = json_file.split('.')[0]
        json_path = os.path.join(JSON_DIR, json_file)
        with codecs.open(json_path, "r", encoding="utf-8") as js:
            raw_data = json.load(js)
            if json_file == COMPARE:
                gen_compare_data(raw_data[COMPARE_SHEET], process_name, m)
                continue
            get_sheet_list = raw_data.keys()
            for sheet in get_sheet_list:
                process_json(raw_data[sheet], sheet, total_dict, m)
        gen_file_name = "Processed_{}_{}.json".format(process_name, m)
        m += 1
        with codecs.open(gen_file_name, "w", "utf-8") as pjs:
            json.dump(total_dict, pjs)


if __name__=="__main__":
    gen_new_json()
    print("Processed!")
    
