import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ISelectionEventArgs } from 'igniteui-angular';

const getHeroClassData = () => {
    const generatedData = [{
        name: "TensorFlow",
        entries: [{
            name: "3DUnet-TensorFlow-MLPerf"
        }, {
            name: "BERTLarge-TensorFlow"
        }, {
            name: "BERTLarge-TensorFlow-EPYC-MLPerf"
        }, {
            name: "BERTLarge-TensorFlow-Graviton"
        }, {
            name: "BST-TensorFlow"
        }, {
            name: "CNN-TensorFlow"
        }, {
            name: "CNN-TensorFlow-Gaudi"
        }, {
            name: "DBMTL-TensorFlow"
        }, {
            name: "DDPG-TensorFlow"
        }, {
            name: "DeepFM-TensorFlow"
        }, {
            name: "DIEN-TensorFlow"
        }, {
            name: "EasyRec-TensorFlow"
        }, {
            name: "GraphSage-TensorFlow"
        }, {
            name: "LSTM-TensorFlow"
        }, {
            name: "MMoE-TensorFlow"
        }, {
            name: "MobileNetv1-TensorFlow"
        }, {
            name: "ResNet50-TensorFlow"
        }, {
            name: "ResNet50-TensorFlow-EPYC"
        }, {
            name: "ResNet50-TensorFlow-Graviton"
        }, {
            name: "ResNet50-TensorFlow-Inferentia"
        }, {
            name: "ResNeXt101-TensorFlow"
        }, {
            name: "SRGAN-TensorFlow"
        }, {
            name: "SSDMobileNet-TensorFlow"
        }, {
            name: "SSDResNet34-TensorFlow"
        }, {
            name: "Transformer-TensorFlow-MLPerf"
        }, {
            name: "VGG19-TensorFlow"
        }, {
            name: "WideDeep-TensorFlow"
        }, {
            name: "YOLOv4-TensorFlow"
        }]
    }, {
        name: "PyTorch",
        entries: [{
            name: "BERTLarge-PyTorch"
        }, {
            name: "Distilbert-PyTorch"
        }, {
            name: "DLRM-PyTorch"
        }, {
            name: "DLRM-Pytorch-Graviton"
        }, {
            name: "DLRM-PyTorch-EPYC-Facebook"
        }, {
            name: "GPT3-PyTorch"
        }, {
            name: "MaskRCNN-PyTorch"
        }, {
            name: "RCAN-PyTorch"
        }, {
            name: "ResNet50-PyTorch"
        }, {
            name: "ResNeXt101v32x16d-PyTorch"
        }, {
            name: "RGCNHetero-PyTorch"
        }, {
            name: "RNNT-PyTorch"
        }, {
            name: "RoBERTa-PyTorch"
        }, {
            name: "SSDResNet34-PyTorch"
        }, {
            name: "ViT-PyTorch"
        }, {
            name: "Wav2vec-PyTorch"
        }, {
            name: "WideDeep-PyTorch"
        }]
    }, {
        name: "OpenVINO",
        entries: [{
            name: "3DUnet-OpenVINO-MLPerf"
        }, {
            name: "BERTLarge-OpenVINO"
        }, {
            name: "CM-xApp-OpenVINO"
        }, {
            name: "DIEN-OpenVINO-Alibaba"
        }, {
            name: "DLRM-OpenVINO"
        }, {
            name: "MaskRCNN-OpenVINO"
        }, {
            name: "ResNet50-OpenVINO"
        }, {
            name: "ResNet50v2-OpenVINO"
        }, {
            name: "ResNeXt101v32x16d-OpenVINO"
        }, {
            name: "RNNT-OpenVINO"
        }, {
            name: "SSDResNet34-OpenVINO"
        }]
    }, {
        name: "ONNX",
        entries: [{
            name: "Distilbert-ONNX"
        }]
    }, {
        name: "DeepRec",
        entries: [{
            name: "DLRM-DeepRec"
        }]
    }, {
        name: "TensorRT",
        entries: [{
            name: "BERTLarge-TensorRT-Nvidia"
        }, {
            name: "BERTLarge-TensorRT-Nvidia-Mlperf"
        }, {
            name: "ResNet50-TensorRT-Nvidia"
        }, {
            name: "ResNet50-TensorRT-Nvidia-Mlperf"
        }]
    }];
    return generatedData;
};

interface IHeroClass {
    name: string;
    entries: ISubClass[];
}
interface ISubClass {
    name: string;
}

@Component({
    selector: 'app-workload-list',
    styleUrls: ['./workload-list.component.scss'],
    templateUrl: './workload-list.component.html'
})
export class WorkloadListComponent implements OnInit {
    @ViewChild('button', { static: true }) public button: ElementRef;
    public heroClasses: IHeroClass[] = [];
    public hero = 'CHOOSE';

    constructor(public elem: ElementRef) {}

    public handleDropDownSelection(event: ISelectionEventArgs) {
        this.hero = event.newSelection.value;
    }

    ngOnInit(): void {
        this.heroClasses = getHeroClassData();
    }
}