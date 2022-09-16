from concurrent.futures import process
from csv import list_dialects
import json
import os
import re
import codecs

JSON_DIR = "."
JSON_TYPE = "compare"

_file_list = os.listdir(JSON_DIR)
json_file_list = []

for file_name in _file_list:
    if "json" in file_name and "Processed" not in file_name and "processed" not in file_name:
        json_file_list.append(file_name)
        
m = 0
for json_file in json_file_list:
    
    process_name = json_file.split('_')[0]
    
    if JSON_TYPE in json_file:
        print("********************************")
        print("processing compare json data ...")
    else:
        print("********************************")
        print("processing json data ...")
        json_path = os.path.join(JSON_DIR, json_file)
        total_dict = {}
        with codecs.open(json_path, "r", encoding="utf-8") as js:
            raw_data = json.load(js)
            bpt = raw_data['Best Performance Tables']
            pst = raw_data['Performance Sweeping Tables']
            bt = raw_data['BS Tables']
            
            print("=============================")
            print("processing pst table data ...")
            start = 0
            end = 0
            list_num = 0
            table_list = {}
            em_num = 0
            em_list = []
            for em_keys in pst:
                list_num += 1
                if em_keys == []:
                    em_list.append(list_num)
                    em_num += 1
            if em_list != []:
                for num_dict, num_list in enumerate(em_list):
                    end = em_list[num_dict]
                    table_list[num_dict] = pst[start:end]
                    start = em_list[num_dict]
                end = len(pst)
                table_list[num_dict+1] = pst[start:end]
            else:
                end = len(pst)
                table_list[0] = pst[0:end]
                
            temp_dict1 = []
            head_table = table_list[0][0]
            for num in range(len(table_list)):
                this_table = table_list[num]
                # head_table = this_table[0]
                for n, this_list in enumerate(this_table):
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
            total_dict['Performance Sweeping Tables'] = temp_dict1
            print("processed pst json data")
            print("=============================")
            print("processing bpt json data ...")
            
            start2 = 0
            end2 = 0
            list_num2 = 0
            table_list2 = {}
            em_num2 = 0
            em_list2 = []
            for em_keys2 in bpt:
                list_num2 += 1
                if em_keys2 == []:
                    em_list2.append(list_num2)
                    em_num2 += 1
            if em_list2 != []:
                for num_dict2, num_list2 in enumerate(em_list2):
                    end2 = em_list2[num_dict2]
                    table_list2[num_dict2] = bpt[start2:end2]
                    start2 = em_list2[num_dict2]
                end2 = len(bpt)
                table_list2[num_dict2+1] = bpt[start2:end2]
            else:
                end2 = len(bpt)
                table_list2[0] = bpt[0:end2]
            
            temp_dict2 = []
            head_table2 = table_list2[0][0]
            for num2 in range(len(table_list2)):
                this_table2 = table_list2[num2]
                # head_table2 = this_table2[0]
                for n2, this_list2 in enumerate(this_table2):
                    if this_list2 == head_table2:
                        continue
                    temp_dict2_1 = {}
                    if this_list2 == []:
                        for i2 in range(len(head_table2)):
                            temp_dict2_1[head_table2[i2]] = ""
                        temp_dict2.append(temp_dict2_1)
                    elif 0 < len(this_list2) < len(head_table2):
                        for i2_1 in range(1, len(head_table2)):
                            temp_dict2_1[head_table2[0]] = this_list2[0]
                            temp_dict2_1[head_table2[i2_1]] = ""
                        temp_dict2.append(temp_dict2_1)
                    else:
                        for index2, values2 in enumerate(this_list2):
                            temp_dict2_1[head_table2[index2]] = values2
                        temp_dict2.append(temp_dict2_1)
            total_dict['Best Performance Tables'] = temp_dict2
            
            print("processed bpt json data")
            print("=============================")
            print("processing bt json data ...")
            
            start3 = 0
            end3 = 0
            list_num3 = 0
            table_list3 = {}
            em_num3 = 0
            em_list3 = []
            for em_keys3 in bt:
                list_num3 += 1
                if em_keys3 == []:
                    em_list3.append(list_num3)
                    em_num3 += 1
            if em_list3 != []:
                for num_dict3, num_list3 in enumerate(em_list3):
                    end3 = em_list3[num_dict3]
                    table_list3[num_dict3] = bt[start3:end3]
                    start3 = em_list3[num_dict3]
                end3 = len(bt)
                table_list3[num_dict3+1] = bt[start3:end3]
            else:
                end3 = len(bt)
                table_list3[0] = bt[0:end3]
            temp_dict3 = []
            head_table3 = table_list3[0][0]
            for num3 in range(len(table_list3)):
                this_table3 = table_list3[num3]
                # head_table3 = this_table3[0]
                for n3, this_list3 in enumerate(this_table3):
                    if this_list3 == head_table3:
                        continue
                    temp_dict3_1 = {}
                    
                    if this_list3 == []:
                        for i3 in range(len(head_table3)):
                            temp_dict3_1[head_table3[i3]] = ""
                        temp_dict3.append(temp_dict3_1)
                    elif 0 < len(this_list3) < len(head_table3):
                        for i3_1 in range(1, len(head_table3)):
                            temp_dict3_1[head_table3[0]] = this_list3[0]
                            temp_dict3_1[head_table3[i3_1]] = ""
                        temp_dict3.append(temp_dict3_1)
                    else:
                        for index3, values3 in enumerate(this_list3):
                            temp_dict3_1[head_table3[index3]] = values3
                        temp_dict3.append(temp_dict3_1)
            total_dict['BS Tables'] = temp_dict3
            print("processing bt json data ...")
        
        
        gen_file_name = "Processed_{}_{}.json".format(process_name, m)
        m += 1
        with codecs.open(gen_file_name, "w", "utf-8") as pjs:
            json.dump(total_dict, pjs)

                            
