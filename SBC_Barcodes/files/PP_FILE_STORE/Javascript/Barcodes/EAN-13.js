var CoreBarcode = getParameters().variables.repeat.sub_json.number;
var CoreBarcodeMag = getParameters().variables.repeat.sub_json.mag;
var CoreBarcodeBwr = getParameters().variables.repeat.sub_json.bwr;

var theBarcodeParameters ={
     UseCustomHeight: false,
     FontSize: 10.9502,
     CreateClearArea: false,
     CustomHeight: 73.5024,
     HumanReadableText: true,
     Magnification: 100,
     Font: "",
     QuietZoneIndicator: true,
     Code: "0000000000000",
     BottomMargin: 0,
     TopMargin: 0,
     TextScaling: "From Magnification",
     RightMargin: 6.548,
     LeftMargin: 10.2898,
     BarWidthReduction: 0
};
theBarcodeParameters.Code = CoreBarcode;
theBarcodeParameters.Magnification = CoreBarcodeMag;
theBarcodeParameters.BarWidthReduction = parseFloat(CoreBarcodeBwr) *2.8346438836889;


setResultVariables({barcode:theBarcodeParameters});
