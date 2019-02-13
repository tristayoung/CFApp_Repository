var CoreBarcode = getParameters().variables.repeat.sub_json.number;
var CoreBarcodeMag = getParameters().variables.repeat.sub_json.mag;
var CoreBarcodeBwr = getParameters().variables.repeat.sub_json.bwr;

var theBarcodeParameters ={
     HumanReadableText: true,
     UseCustomHeight: false,
     Height: 135.411,
     TextScaling: "From Magnification",
     GenerateBearerBars: false,
     FontSize: 12,
     CreateClearArea: false,
     Font: "",
     ClearAreaMargin: 0,
     Magnification: 100,
     Code: "00000000000000",
     BarWidthReduction: 0
};

theBarcodeParameters.Code = CoreBarcode;
theBarcodeParameters.Magnification = CoreBarcodeMag;
theBarcodeParameters.BarWidthReduction = parseFloat(CoreBarcodeBwr) *2.8346438836889;


setResultVariables({barcode:theBarcodeParameters});
