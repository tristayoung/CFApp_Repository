var CoreBarcode = getParameters().variables.repeat.sub_json.number;
var CoreBarcodeMag = getParameters().variables.repeat.sub_json.mag;
var CoreBarcodeBwr = getParameters().variables.repeat.sub_json.bwr;

var theBarcodeParameters ={
     CellSize: 2.8346,
     MinimumSymbolSize: "21×21",
     ECCLevel: "L",
     CreateClearArea: true,
     ClearAreaMargin: 0,
     Code: "Hello",
     BarWidthReduction: 0
};

theBarcodeParameters.Code = CoreBarcode;
theBarcodeParameters.Magnification = CoreBarcodeMag;
theBarcodeParameters.BarWidthReduction = parseFloat(CoreBarcodeBwr) *2.8346438836889;


setResultVariables({barcode:theBarcodeParameters});
