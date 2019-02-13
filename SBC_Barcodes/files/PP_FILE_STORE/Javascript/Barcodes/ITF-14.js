var CoreBarcode = getParameters().variables.repeat.sub_json.number;
var CoreBarcodeMag = getParameters().variables.repeat.sub_json.mag;
var CoreBarcodeBwr = getParameters().variables.repeat.sub_json.bwr;

var theBarcodeParameters ={
     HumanReadableText: true,
     GenerateHGauges: false,
     SMin: "3",
     Magnification: 100,
     Height: 135.411,
     TextScaling: "From Magnification",
     FontSize: 12,
     SMax: "4",
     CreateClearArea: false,
     Font: "",
     FormatTextAs1_2_5_5_1: false,
     Padding: 28.8,
     ClearAreaMargin: 0,
     UseCustomHeight: false,
     Code: "00000000000000",
     BarWidthReduction: 0
};

theBarcodeParameters.Code = CoreBarcode;
theBarcodeParameters.Magnification = CoreBarcodeMag;
theBarcodeParameters.BarWidthReduction = parseFloat(CoreBarcodeBwr) *2.8346438836889;


setResultVariables({barcode:theBarcodeParameters});
