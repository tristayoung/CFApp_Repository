var CoreBarcode = getParameters().variables.repeat.sub_json.number;
var CoreBarcodeMag = getParameters().variables.repeat.sub_json.mag;
var CoreBarcodeBwr = getParameters().variables.repeat.sub_json.bwr;

var theBarcodeParameters ={
     UseCustomHeight: false,
     CreateClearArea: false,
     HumanReadableText: true,
     Magnification: 100,
     Font: "",
     Code: "00000000",
     BottomMargin: 0,
     TopMargin: 0,
     Height: 73.5024,
     RightMargin: 6.548,
     LeftMargin: 8.4189,
     BarWidthReduction: 0
};

theBarcodeParameters.Code = CoreBarcode;
theBarcodeParameters.Magnification = CoreBarcodeMag;
theBarcodeParameters.BarWidthReduction = parseFloat(CoreBarcodeBwr) *2.8346438836889;

setResultVariables({barcode:theBarcodeParameters});
