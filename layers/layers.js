var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AllCountyBorders_1 = new ol.format.GeoJSON();
var features_AllCountyBorders_1 = format_AllCountyBorders_1.readFeatures(json_AllCountyBorders_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllCountyBorders_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllCountyBorders_1.addFeatures(features_AllCountyBorders_1);
var lyr_AllCountyBorders_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllCountyBorders_1, 
                style: style_AllCountyBorders_1,
                popuplayertitle: "All County Borders",
                interactive: true,
                title: '<img src="styles/legend/AllCountyBorders_1.png" /> All County Borders'
            });
var format_ABPTurbineCases2019toNow_2 = new ol.format.GeoJSON();
var features_ABPTurbineCases2019toNow_2 = format_ABPTurbineCases2019toNow_2.readFeatures(json_ABPTurbineCases2019toNow_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ABPTurbineCases2019toNow_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABPTurbineCases2019toNow_2.addFeatures(features_ABPTurbineCases2019toNow_2);
var lyr_ABPTurbineCases2019toNow_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ABPTurbineCases2019toNow_2, 
                style: style_ABPTurbineCases2019toNow_2,
                popuplayertitle: "ABP Turbine Cases 2019 to Now",
                interactive: true,
                title: '<img src="styles/legend/ABPTurbineCases2019toNow_2.png" /> ABP Turbine Cases 2019 to Now'
            });
var format_CCTurbineCases2019toNow_3 = new ol.format.GeoJSON();
var features_CCTurbineCases2019toNow_3 = format_CCTurbineCases2019toNow_3.readFeatures(json_CCTurbineCases2019toNow_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCTurbineCases2019toNow_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCTurbineCases2019toNow_3.addFeatures(features_CCTurbineCases2019toNow_3);
var lyr_CCTurbineCases2019toNow_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CCTurbineCases2019toNow_3, 
                style: style_CCTurbineCases2019toNow_3,
                popuplayertitle: "CC Turbine Cases 2019 to Now",
                interactive: true,
                title: '<img src="styles/legend/CCTurbineCases2019toNow_3.png" /> CC Turbine Cases 2019 to Now'
            });
var format_AllSubstationsIreland_4 = new ol.format.GeoJSON();
var features_AllSubstationsIreland_4 = format_AllSubstationsIreland_4.readFeatures(json_AllSubstationsIreland_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllSubstationsIreland_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllSubstationsIreland_4.addFeatures(features_AllSubstationsIreland_4);
var lyr_AllSubstationsIreland_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllSubstationsIreland_4, 
                style: style_AllSubstationsIreland_4,
                popuplayertitle: "All Substations Ireland",
                interactive: true,
    title: 'All Substations Ireland<br />\
    <img src="styles/legend/AllSubstationsIreland_4_0.png" /> 110 kV<br />\
    <img src="styles/legend/AllSubstationsIreland_4_1.png" /> 220 kV<br />\
    <img src="styles/legend/AllSubstationsIreland_4_2.png" /> 38 kV<br />\
    <img src="styles/legend/AllSubstationsIreland_4_3.png" /> Not Stated / Private <br />'
        });
var format_PowerLinesRepublicofIreland_5 = new ol.format.GeoJSON();
var features_PowerLinesRepublicofIreland_5 = format_PowerLinesRepublicofIreland_5.readFeatures(json_PowerLinesRepublicofIreland_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PowerLinesRepublicofIreland_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PowerLinesRepublicofIreland_5.addFeatures(features_PowerLinesRepublicofIreland_5);
var lyr_PowerLinesRepublicofIreland_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PowerLinesRepublicofIreland_5, 
                style: style_PowerLinesRepublicofIreland_5,
                popuplayertitle: "Power Lines Republic of Ireland",
                interactive: true,
    title: 'Power Lines Republic of Ireland<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_0.png" /> 6600<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_1.png" /> 400000;220000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_2.png" /> 400000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_3.png" /> 400<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_4.png" /> 380000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_5.png" /> 38000;20000;10000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_6.png" /> 38000;20000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_7.png" /> 38000;10000;20000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_8.png" /> 38000;10000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_9.png" /> 38000;0<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_10.png" /> 38000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_11.png" /> 33000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_12.png" /> 275000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_13.png" /> 230<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_14.png" /> 220000;220000;220000;110000;110000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_15.png" /> 220000;220000;110000;110000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_16.png" /> 220000;220000;110000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_17.png" /> 220000;110000;38000;10000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_18.png" /> 220000;110000;38000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_19.png" /> 220000;110000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_20.png" /> 220000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_21.png" /> 22000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_22.png" /> 220<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_23.png" /> 20000;10000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_24.png" /> 20000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_25.png" /> 19000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_26.png" /> 110000;38000;10000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_27.png" /> 110000;38000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_28.png" /> 110000;0<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_29.png" /> 110000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_30.png" /> 11000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_31.png" /> 110<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_32.png" /> 10500<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_33.png" /> 10000<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_34.png" /> 0<br />\
    <img src="styles/legend/PowerLinesRepublicofIreland_5_35.png" /> <br />'
        });
var format_PowerGeneratorPointROI_6 = new ol.format.GeoJSON();
var features_PowerGeneratorPointROI_6 = format_PowerGeneratorPointROI_6.readFeatures(json_PowerGeneratorPointROI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PowerGeneratorPointROI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PowerGeneratorPointROI_6.addFeatures(features_PowerGeneratorPointROI_6);
var lyr_PowerGeneratorPointROI_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PowerGeneratorPointROI_6, 
                style: style_PowerGeneratorPointROI_6,
                popuplayertitle: "Power Generator Point ROI",
                interactive: true,
    title: 'Power Generator Point ROI<br />\
    <img src="styles/legend/PowerGeneratorPointROI_6_0.png" /> Biogas<br />\
    <img src="styles/legend/PowerGeneratorPointROI_6_1.png" /> Coal<br />\
    <img src="styles/legend/PowerGeneratorPointROI_6_2.png" /> Diesel<br />\
    <img src="styles/legend/PowerGeneratorPointROI_6_3.png" /> Fossil<br />\
    <img src="styles/legend/PowerGeneratorPointROI_6_4.png" /> Gas<br />\
    <img src="styles/legend/PowerGeneratorPointROI_6_5.png" /> Gas and Oil Hybrid<br />\
    <img src="styles/legend/PowerGeneratorPointROI_6_6.png" /> Hydro<br />\
    <img src="styles/legend/PowerGeneratorPointROI_6_7.png" /> Landfill Gas<br />\
    <img src="styles/legend/PowerGeneratorPointROI_6_8.png" /> Oil<br />\
    <img src="styles/legend/PowerGeneratorPointROI_6_9.png" /> Oil and Gas Hybrid<br />\
    <img src="styles/legend/PowerGeneratorPointROI_6_10.png" /> Solar<br />\
    <img src="styles/legend/PowerGeneratorPointROI_6_11.png" /> Waste<br />\
    <img src="styles/legend/PowerGeneratorPointROI_6_12.png" /> Wind<br />\
    <img src="styles/legend/PowerGeneratorPointROI_6_13.png" /> Other<br />'
        });
var format_Solar_7 = new ol.format.GeoJSON();
var features_Solar_7 = format_Solar_7.readFeatures(json_Solar_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solar_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solar_7.addFeatures(features_Solar_7);
var lyr_Solar_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Solar_7, 
                style: style_Solar_7,
                popuplayertitle: "Solar",
                interactive: true,
                title: '<img src="styles/legend/Solar_7.png" /> Solar'
            });
var format_PowerPlantROI_8 = new ol.format.GeoJSON();
var features_PowerPlantROI_8 = format_PowerPlantROI_8.readFeatures(json_PowerPlantROI_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PowerPlantROI_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PowerPlantROI_8.addFeatures(features_PowerPlantROI_8);
var lyr_PowerPlantROI_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PowerPlantROI_8, 
                style: style_PowerPlantROI_8,
                popuplayertitle: "Power Plant ROI",
                interactive: true,
    title: 'Power Plant ROI<br />\
    <img src="styles/legend/PowerPlantROI_8_0.png" /> Battery<br />\
    <img src="styles/legend/PowerPlantROI_8_1.png" /> Biogas<br />\
    <img src="styles/legend/PowerPlantROI_8_2.png" /> Biomass<br />\
    <img src="styles/legend/PowerPlantROI_8_3.png" /> Coal<br />\
    <img src="styles/legend/PowerPlantROI_8_4.png" /> Fuel<br />\
    <img src="styles/legend/PowerPlantROI_8_5.png" /> Gas<br />\
    <img src="styles/legend/PowerPlantROI_8_6.png" /> Gas and Oil Hybrid<br />\
    <img src="styles/legend/PowerPlantROI_8_7.png" /> Hydro<br />\
    <img src="styles/legend/PowerPlantROI_8_8.png" /> Landfill Gas<br />\
    <img src="styles/legend/PowerPlantROI_8_9.png" /> Oil<br />\
    <img src="styles/legend/PowerPlantROI_8_10.png" /> Peat and Biomass Hybrid<br />\
    <img src="styles/legend/PowerPlantROI_8_11.png" /> Solar<br />\
    <img src="styles/legend/PowerPlantROI_8_12.png" /> Waste<br />\
    <img src="styles/legend/PowerPlantROI_8_13.png" /> Wind<br />'
        });
var format_WindTurbinesIreland_9 = new ol.format.GeoJSON();
var features_WindTurbinesIreland_9 = format_WindTurbinesIreland_9.readFeatures(json_WindTurbinesIreland_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WindTurbinesIreland_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WindTurbinesIreland_9.addFeatures(features_WindTurbinesIreland_9);
var lyr_WindTurbinesIreland_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WindTurbinesIreland_9, 
                style: style_WindTurbinesIreland_9,
                popuplayertitle: "Wind Turbines Ireland",
                interactive: true,
                title: '<img src="styles/legend/WindTurbinesIreland_9.png" /> Wind Turbines Ireland'
            });
var format_TurbineLocationswElevationData_10 = new ol.format.GeoJSON();
var features_TurbineLocationswElevationData_10 = format_TurbineLocationswElevationData_10.readFeatures(json_TurbineLocationswElevationData_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TurbineLocationswElevationData_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TurbineLocationswElevationData_10.addFeatures(features_TurbineLocationswElevationData_10);
var lyr_TurbineLocationswElevationData_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TurbineLocationswElevationData_10, 
                style: style_TurbineLocationswElevationData_10,
                popuplayertitle: "Turbine Locations w/ Elevation Data",
                interactive: true,
                title: '<img src="styles/legend/TurbineLocationswElevationData_10.png" /> Turbine Locations w/ Elevation Data'
            });
var format_ECP24CategoryC_11 = new ol.format.GeoJSON();
var features_ECP24CategoryC_11 = format_ECP24CategoryC_11.readFeatures(json_ECP24CategoryC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ECP24CategoryC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECP24CategoryC_11.addFeatures(features_ECP24CategoryC_11);
var lyr_ECP24CategoryC_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECP24CategoryC_11, 
                style: style_ECP24CategoryC_11,
                popuplayertitle: "ECP 2.4 Category C",
                interactive: true,
                title: '<img src="styles/legend/ECP24CategoryC_11.png" /> ECP 2.4 Category C'
            });
var format_ECP24CategoryB_12 = new ol.format.GeoJSON();
var features_ECP24CategoryB_12 = format_ECP24CategoryB_12.readFeatures(json_ECP24CategoryB_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ECP24CategoryB_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECP24CategoryB_12.addFeatures(features_ECP24CategoryB_12);
var lyr_ECP24CategoryB_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECP24CategoryB_12, 
                style: style_ECP24CategoryB_12,
                popuplayertitle: "ECP 2.4 Category B",
                interactive: true,
                title: '<img src="styles/legend/ECP24CategoryB_12.png" /> ECP 2.4 Category B'
            });
var format_ECP24CategoryA_13 = new ol.format.GeoJSON();
var features_ECP24CategoryA_13 = format_ECP24CategoryA_13.readFeatures(json_ECP24CategoryA_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ECP24CategoryA_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECP24CategoryA_13.addFeatures(features_ECP24CategoryA_13);
var lyr_ECP24CategoryA_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECP24CategoryA_13, 
                style: style_ECP24CategoryA_13,
                popuplayertitle: "ECP 2.4 Category A",
                interactive: true,
                title: '<img src="styles/legend/ECP24CategoryA_13.png" /> ECP 2.4 Category A'
            });
var format_ECP23CategoryC_14 = new ol.format.GeoJSON();
var features_ECP23CategoryC_14 = format_ECP23CategoryC_14.readFeatures(json_ECP23CategoryC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ECP23CategoryC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECP23CategoryC_14.addFeatures(features_ECP23CategoryC_14);
var lyr_ECP23CategoryC_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECP23CategoryC_14, 
                style: style_ECP23CategoryC_14,
                popuplayertitle: "ECP 2.3 Category C",
                interactive: true,
                title: '<img src="styles/legend/ECP23CategoryC_14.png" /> ECP 2.3 Category C'
            });
var format_ECP23CategoryB_15 = new ol.format.GeoJSON();
var features_ECP23CategoryB_15 = format_ECP23CategoryB_15.readFeatures(json_ECP23CategoryB_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ECP23CategoryB_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECP23CategoryB_15.addFeatures(features_ECP23CategoryB_15);
var lyr_ECP23CategoryB_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECP23CategoryB_15, 
                style: style_ECP23CategoryB_15,
                popuplayertitle: "ECP 2.3 Category B",
                interactive: true,
                title: '<img src="styles/legend/ECP23CategoryB_15.png" /> ECP 2.3 Category B'
            });
var format_ECP23CategoryA_16 = new ol.format.GeoJSON();
var features_ECP23CategoryA_16 = format_ECP23CategoryA_16.readFeatures(json_ECP23CategoryA_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ECP23CategoryA_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECP23CategoryA_16.addFeatures(features_ECP23CategoryA_16);
var lyr_ECP23CategoryA_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECP23CategoryA_16, 
                style: style_ECP23CategoryA_16,
                popuplayertitle: "ECP 2.3 Category A",
                interactive: true,
                title: '<img src="styles/legend/ECP23CategoryA_16.png" /> ECP 2.3 Category A'
            });
var format_ECP22CategoryC_17 = new ol.format.GeoJSON();
var features_ECP22CategoryC_17 = format_ECP22CategoryC_17.readFeatures(json_ECP22CategoryC_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ECP22CategoryC_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECP22CategoryC_17.addFeatures(features_ECP22CategoryC_17);
var lyr_ECP22CategoryC_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECP22CategoryC_17, 
                style: style_ECP22CategoryC_17,
                popuplayertitle: "ECP 2.2 Category C",
                interactive: true,
                title: '<img src="styles/legend/ECP22CategoryC_17.png" /> ECP 2.2 Category C'
            });
var format_ECP22CategoryB_18 = new ol.format.GeoJSON();
var features_ECP22CategoryB_18 = format_ECP22CategoryB_18.readFeatures(json_ECP22CategoryB_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ECP22CategoryB_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECP22CategoryB_18.addFeatures(features_ECP22CategoryB_18);
var lyr_ECP22CategoryB_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECP22CategoryB_18, 
                style: style_ECP22CategoryB_18,
                popuplayertitle: "ECP 2.2 Category B",
                interactive: true,
                title: '<img src="styles/legend/ECP22CategoryB_18.png" /> ECP 2.2 Category B'
            });
var format_ECP22CategoryA_19 = new ol.format.GeoJSON();
var features_ECP22CategoryA_19 = format_ECP22CategoryA_19.readFeatures(json_ECP22CategoryA_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ECP22CategoryA_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECP22CategoryA_19.addFeatures(features_ECP22CategoryA_19);
var lyr_ECP22CategoryA_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECP22CategoryA_19, 
                style: style_ECP22CategoryA_19,
                popuplayertitle: "ECP 2.2 Category A",
                interactive: true,
                title: '<img src="styles/legend/ECP22CategoryA_19.png" /> ECP 2.2 Category A'
            });
var format_ECP21CategoryC_20 = new ol.format.GeoJSON();
var features_ECP21CategoryC_20 = format_ECP21CategoryC_20.readFeatures(json_ECP21CategoryC_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ECP21CategoryC_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECP21CategoryC_20.addFeatures(features_ECP21CategoryC_20);
var lyr_ECP21CategoryC_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECP21CategoryC_20, 
                style: style_ECP21CategoryC_20,
                popuplayertitle: "ECP 2.1 Category C",
                interactive: true,
                title: '<img src="styles/legend/ECP21CategoryC_20.png" /> ECP 2.1 Category C'
            });
var format_ECP21CategoryB_21 = new ol.format.GeoJSON();
var features_ECP21CategoryB_21 = format_ECP21CategoryB_21.readFeatures(json_ECP21CategoryB_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ECP21CategoryB_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECP21CategoryB_21.addFeatures(features_ECP21CategoryB_21);
var lyr_ECP21CategoryB_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECP21CategoryB_21, 
                style: style_ECP21CategoryB_21,
                popuplayertitle: "ECP 2.1 Category B",
                interactive: true,
                title: '<img src="styles/legend/ECP21CategoryB_21.png" /> ECP 2.1 Category B'
            });
var format_ECP21CategoryA_22 = new ol.format.GeoJSON();
var features_ECP21CategoryA_22 = format_ECP21CategoryA_22.readFeatures(json_ECP21CategoryA_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ECP21CategoryA_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECP21CategoryA_22.addFeatures(features_ECP21CategoryA_22);
var lyr_ECP21CategoryA_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECP21CategoryA_22, 
                style: style_ECP21CategoryA_22,
                popuplayertitle: "ECP 2.1 Category A",
                interactive: true,
                title: '<img src="styles/legend/ECP21CategoryA_22.png" /> ECP 2.1 Category A'
            });
var format_RESS3Wind_23 = new ol.format.GeoJSON();
var features_RESS3Wind_23 = format_RESS3Wind_23.readFeatures(json_RESS3Wind_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESS3Wind_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESS3Wind_23.addFeatures(features_RESS3Wind_23);
var lyr_RESS3Wind_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESS3Wind_23, 
                style: style_RESS3Wind_23,
                popuplayertitle: "RESS 3 Wind",
                interactive: true,
                title: '<img src="styles/legend/RESS3Wind_23.png" /> RESS 3 Wind'
            });
var format_RESS3Solar_24 = new ol.format.GeoJSON();
var features_RESS3Solar_24 = format_RESS3Solar_24.readFeatures(json_RESS3Solar_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESS3Solar_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESS3Solar_24.addFeatures(features_RESS3Solar_24);
var lyr_RESS3Solar_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESS3Solar_24, 
                style: style_RESS3Solar_24,
                popuplayertitle: "RESS 3 Solar",
                interactive: true,
                title: '<img src="styles/legend/RESS3Solar_24.png" /> RESS 3 Solar'
            });
var format_RESS2Wind_25 = new ol.format.GeoJSON();
var features_RESS2Wind_25 = format_RESS2Wind_25.readFeatures(json_RESS2Wind_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESS2Wind_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESS2Wind_25.addFeatures(features_RESS2Wind_25);
var lyr_RESS2Wind_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESS2Wind_25, 
                style: style_RESS2Wind_25,
                popuplayertitle: "RESS 2 Wind",
                interactive: true,
                title: '<img src="styles/legend/RESS2Wind_25.png" /> RESS 2 Wind'
            });
var format_RESS2Solar_26 = new ol.format.GeoJSON();
var features_RESS2Solar_26 = format_RESS2Solar_26.readFeatures(json_RESS2Solar_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESS2Solar_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESS2Solar_26.addFeatures(features_RESS2Solar_26);
var lyr_RESS2Solar_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESS2Solar_26, 
                style: style_RESS2Solar_26,
                popuplayertitle: "RESS 2 Solar",
                interactive: true,
                title: '<img src="styles/legend/RESS2Solar_26.png" /> RESS 2 Solar'
            });
var format_RESS1Wind_27 = new ol.format.GeoJSON();
var features_RESS1Wind_27 = format_RESS1Wind_27.readFeatures(json_RESS1Wind_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESS1Wind_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESS1Wind_27.addFeatures(features_RESS1Wind_27);
var lyr_RESS1Wind_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESS1Wind_27, 
                style: style_RESS1Wind_27,
                popuplayertitle: "RESS 1 Wind",
                interactive: true,
                title: '<img src="styles/legend/RESS1Wind_27.png" /> RESS 1 Wind'
            });
var format_RESS1Solar_28 = new ol.format.GeoJSON();
var features_RESS1Solar_28 = format_RESS1Solar_28.readFeatures(json_RESS1Solar_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESS1Solar_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESS1Solar_28.addFeatures(features_RESS1Solar_28);
var lyr_RESS1Solar_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RESS1Solar_28, 
                style: style_RESS1Solar_28,
                popuplayertitle: "RESS 1 Solar",
                interactive: true,
                title: '<img src="styles/legend/RESS1Solar_28.png" /> RESS 1 Solar'
            });
var format_2022Now_29 = new ol.format.GeoJSON();
var features_2022Now_29 = format_2022Now_29.readFeatures(json_2022Now_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022Now_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022Now_29.addFeatures(features_2022Now_29);
var lyr_2022Now_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2022Now_29, 
                style: style_2022Now_29,
                popuplayertitle: "2022 - Now",
                interactive: true,
                title: '<img src="styles/legend/2022Now_29.png" /> 2022 - Now'
            });
var format_2022NowElevation_30 = new ol.format.GeoJSON();
var features_2022NowElevation_30 = format_2022NowElevation_30.readFeatures(json_2022NowElevation_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022NowElevation_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022NowElevation_30.addFeatures(features_2022NowElevation_30);
var lyr_2022NowElevation_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2022NowElevation_30, 
                style: style_2022NowElevation_30,
                popuplayertitle: "2022 - Now Elevation",
                interactive: true,
    title: '2022 - Now Elevation<br />\
    <img src="styles/legend/2022NowElevation_30_0.png" /> 0 - 125<br />\
    <img src="styles/legend/2022NowElevation_30_1.png" /> 125 - 214<br />\
    <img src="styles/legend/2022NowElevation_30_2.png" /> 214 - 288<br />\
    <img src="styles/legend/2022NowElevation_30_3.png" /> 288 - 336<br />\
    <img src="styles/legend/2022NowElevation_30_4.png" /> 336 - 460<br />'
        });
var format_20092022_31 = new ol.format.GeoJSON();
var features_20092022_31 = format_20092022_31.readFeatures(json_20092022_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20092022_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20092022_31.addFeatures(features_20092022_31);
var lyr_20092022_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20092022_31, 
                style: style_20092022_31,
                popuplayertitle: "2009 - 2022",
                interactive: true,
                title: '<img src="styles/legend/20092022_31.png" /> 2009 - 2022'
            });
var format_20092022Elevation_32 = new ol.format.GeoJSON();
var features_20092022Elevation_32 = format_20092022Elevation_32.readFeatures(json_20092022Elevation_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20092022Elevation_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20092022Elevation_32.addFeatures(features_20092022Elevation_32);
var lyr_20092022Elevation_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20092022Elevation_32, 
                style: style_20092022Elevation_32,
                popuplayertitle: "2009 - 2022 Elevation",
                interactive: true,
    title: '2009 - 2022 Elevation<br />\
    <img src="styles/legend/20092022Elevation_32_0.png" /> 0 - 125<br />\
    <img src="styles/legend/20092022Elevation_32_1.png" /> 125 - 214<br />\
    <img src="styles/legend/20092022Elevation_32_2.png" /> 214 - 288<br />\
    <img src="styles/legend/20092022Elevation_32_3.png" /> 288 - 336<br />\
    <img src="styles/legend/20092022Elevation_32_4.png" /> 336 - 460<br />'
        });
var format_19922008_33 = new ol.format.GeoJSON();
var features_19922008_33 = format_19922008_33.readFeatures(json_19922008_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19922008_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19922008_33.addFeatures(features_19922008_33);
var lyr_19922008_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19922008_33, 
                style: style_19922008_33,
                popuplayertitle: "1992 - 2008",
                interactive: true,
                title: '<img src="styles/legend/19922008_33.png" /> 1992 - 2008'
            });
var format_19922008Elevation_34 = new ol.format.GeoJSON();
var features_19922008Elevation_34 = format_19922008Elevation_34.readFeatures(json_19922008Elevation_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19922008Elevation_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19922008Elevation_34.addFeatures(features_19922008Elevation_34);
var lyr_19922008Elevation_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19922008Elevation_34, 
                style: style_19922008Elevation_34,
                popuplayertitle: "1992 - 2008 Elevation",
                interactive: true,
    title: '1992 - 2008 Elevation<br />\
    <img src="styles/legend/19922008Elevation_34_0.png" /> 0 - 125<br />\
    <img src="styles/legend/19922008Elevation_34_1.png" /> 125 - 214<br />\
    <img src="styles/legend/19922008Elevation_34_2.png" /> 214 - 288<br />\
    <img src="styles/legend/19922008Elevation_34_3.png" /> 288 - 336<br />\
    <img src="styles/legend/19922008Elevation_34_4.png" /> 336 - 460<br />'
        });
var format_AllWindFarmsto2022_35 = new ol.format.GeoJSON();
var features_AllWindFarmsto2022_35 = format_AllWindFarmsto2022_35.readFeatures(json_AllWindFarmsto2022_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllWindFarmsto2022_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllWindFarmsto2022_35.addFeatures(features_AllWindFarmsto2022_35);
var lyr_AllWindFarmsto2022_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllWindFarmsto2022_35, 
                style: style_AllWindFarmsto2022_35,
                popuplayertitle: "All Wind Farms to 2022",
                interactive: true,
                title: '<img src="styles/legend/AllWindFarmsto2022_35.png" /> All Wind Farms to 2022'
            });
var group_WindFarmData = new ol.layer.Group({
                                layers: [lyr_2022Now_29,lyr_2022NowElevation_30,lyr_20092022_31,lyr_20092022Elevation_32,lyr_19922008_33,lyr_19922008Elevation_34,lyr_AllWindFarmsto2022_35,],
                                fold: "open",
                                title: "Wind Farm Data"});
var group_RESS = new ol.layer.Group({
                                layers: [lyr_RESS3Wind_23,lyr_RESS3Solar_24,lyr_RESS2Wind_25,lyr_RESS2Solar_26,lyr_RESS1Wind_27,lyr_RESS1Solar_28,],
                                fold: "open",
                                title: "RESS"});
var group_ECP = new ol.layer.Group({
                                layers: [lyr_ECP24CategoryC_11,lyr_ECP24CategoryB_12,lyr_ECP24CategoryA_13,lyr_ECP23CategoryC_14,lyr_ECP23CategoryB_15,lyr_ECP23CategoryA_16,lyr_ECP22CategoryC_17,lyr_ECP22CategoryB_18,lyr_ECP22CategoryA_19,lyr_ECP21CategoryC_20,lyr_ECP21CategoryB_21,lyr_ECP21CategoryA_22,],
                                fold: "open",
                                title: "ECP "});
var group_RenewableEnergyGenerationIreland = new ol.layer.Group({
                                layers: [lyr_AllSubstationsIreland_4,lyr_PowerLinesRepublicofIreland_5,lyr_PowerGeneratorPointROI_6,lyr_Solar_7,lyr_PowerPlantROI_8,lyr_WindTurbinesIreland_9,lyr_TurbineLocationswElevationData_10,],
                                fold: "open",
                                title: "Renewable Energy Generation Ireland"});
var group_TurbineCases2019Now = new ol.layer.Group({
                                layers: [lyr_ABPTurbineCases2019toNow_2,lyr_CCTurbineCases2019toNow_3,],
                                fold: "open",
                                title: "Turbine Cases 2019 -> Now"});

lyr_OpenStreetMap_0.setVisible(true);lyr_AllCountyBorders_1.setVisible(true);lyr_ABPTurbineCases2019toNow_2.setVisible(true);lyr_CCTurbineCases2019toNow_3.setVisible(true);lyr_AllSubstationsIreland_4.setVisible(true);lyr_PowerLinesRepublicofIreland_5.setVisible(true);lyr_PowerGeneratorPointROI_6.setVisible(true);lyr_Solar_7.setVisible(true);lyr_PowerPlantROI_8.setVisible(true);lyr_WindTurbinesIreland_9.setVisible(true);lyr_TurbineLocationswElevationData_10.setVisible(true);lyr_ECP24CategoryC_11.setVisible(true);lyr_ECP24CategoryB_12.setVisible(true);lyr_ECP24CategoryA_13.setVisible(true);lyr_ECP23CategoryC_14.setVisible(true);lyr_ECP23CategoryB_15.setVisible(true);lyr_ECP23CategoryA_16.setVisible(true);lyr_ECP22CategoryC_17.setVisible(true);lyr_ECP22CategoryB_18.setVisible(true);lyr_ECP22CategoryA_19.setVisible(true);lyr_ECP21CategoryC_20.setVisible(true);lyr_ECP21CategoryB_21.setVisible(true);lyr_ECP21CategoryA_22.setVisible(true);lyr_RESS3Wind_23.setVisible(true);lyr_RESS3Solar_24.setVisible(true);lyr_RESS2Wind_25.setVisible(true);lyr_RESS2Solar_26.setVisible(true);lyr_RESS1Wind_27.setVisible(true);lyr_RESS1Solar_28.setVisible(true);lyr_2022Now_29.setVisible(true);lyr_2022NowElevation_30.setVisible(true);lyr_20092022_31.setVisible(true);lyr_20092022Elevation_32.setVisible(true);lyr_19922008_33.setVisible(true);lyr_19922008Elevation_34.setVisible(true);lyr_AllWindFarmsto2022_35.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AllCountyBorders_1,group_TurbineCases2019Now,group_RenewableEnergyGenerationIreland,group_ECP,group_RESS,group_WindFarmData];
lyr_AllCountyBorders_1.set('fieldAliases', {'CO_ID': 'CO_ID', 'ENGLISH': 'ENGLISH', 'GAEILGE': 'GAEILGE', 'LOGAINM_ID': 'LOGAINM_ID', 'GUID': 'GUID', 'CONTAE': 'CONTAE', 'COUNTY': 'COUNTY', 'PROVINCE': 'PROVINCE', 'CENTROID_X': 'CENTROID_X', 'CENTROID_Y': 'CENTROID_Y', 'AREA': 'AREA', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'layer': 'layer', 'path': 'path', });
lyr_ABPTurbineCases2019toNow_2.set('fieldAliases', {'ABPCASEID': 'ABPCASEID', 'DEVDESC': 'DEVDESC', 'DEVADDRESS': 'DEVADDRESS', 'LODGEDON': 'LODGEDON', 'DECISION': 'DECISION', 'DECIDED_ON': 'DECIDED_ON', 'LINKABPWEB': 'LINKABPWEB', 'PLANINGATY': 'PLANINGATY', 'CATEGORY': 'CATEGORY', 'UPDATED_ON': 'UPDATED_ON', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_CCTurbineCases2019toNow_3.set('fieldAliases', {'PlanningAu': 'PlanningAu', 'Applicatio': 'Applicatio', 'Developmen': 'Developmen', 'Developm_1': 'Developm_1', 'Developm_2': 'Developm_2', 'ITMEasting': 'ITMEasting', 'ITMNorthin': 'ITMNorthin', 'Applicat_1': 'Applicat_1', 'Applicat_2': 'Applicat_2', 'Decision': 'Decision', 'LandUseCod': 'LandUseCod', 'AreaofSite': 'AreaofSite', 'NumResiden': 'NumResiden', 'OneOffHous': 'OneOffHous', 'FloorArea': 'FloorArea', 'ReceivedDa': 'ReceivedDa', 'WithdrawnD': 'WithdrawnD', 'DecisionDa': 'DecisionDa', 'DecisionDu': 'DecisionDu', 'GrantDate': 'GrantDate', 'ExpiryDate': 'ExpiryDate', 'AppealRefN': 'AppealRefN', 'AppealStat': 'AppealStat', 'AppealDeci': 'AppealDeci', 'AppealDe_1': 'AppealDe_1', 'AppealSubm': 'AppealSubm', 'FIRequestD': 'FIRequestD', 'FIRecDate': 'FIRecDate', 'LinkAppDet': 'LinkAppDet', 'OneOffKPI': 'OneOffKPI', 'ETL_DATE': 'ETL_DATE', 'SiteId': 'SiteId', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_AllSubstationsIreland_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Station_Na': 'Station_Na', 'GenAvailab': 'GenAvailab', 'X': 'X', 'Y': 'Y', 'Generation': 'Generation', 'Generati_1': 'Generati_1', 'PrimarykV': 'PrimarykV', 'Secondary_': 'Secondary_', 'VoltageCla': 'VoltageCla', 'Transforme': 'Transforme', 'InstalledC': 'InstalledC', 'DemandData': 'DemandData', 'DemandFirm': 'DemandFirm', 'DemandAvai': 'DemandAvai', 'ParentAvai': 'ParentAvai', 'DemandPare': 'DemandPare', 'Generati_2': 'Generati_2', 'Generati_3': 'Generati_3', 'Generati_4': 'Generati_4', 'Generati_5': 'Generati_5', 'Generati_6': 'Generati_6', 'Generati_7': 'Generati_7', 'GenAvail_1': 'GenAvail_1', 'Generati_8': 'Generati_8', 'GeneralDat': 'GeneralDat', 'ParentFeed': 'ParentFeed', 'ParentStat': 'ParentStat', 'TSOInterfa': 'TSOInterfa', 'Comment': 'Comment', 'Field30': 'Field30', 'Field31': 'Field31', });
lyr_PowerLinesRepublicofIreland_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'power': 'power', 'operator_t': 'operator_t', 'old_name__': 'old_name__', 'abandoned_': 'abandoned_', 'name_en': 'name_en', 'start_date': 'start_date', 'line': 'line', 'operator_w': 'operator_w', 'year_of_co': 'year_of_co', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'website': 'website', 'submarine': 'submarine', 'seamark_ty': 'seamark_ty', 'seamark_ca': 'seamark_ca', 'rating': 'rating', 'owner': 'owner', 'descriptio': 'descriptio', 'circuits': 'circuits', 'alt_name': 'alt_name', 'phases': 'phases', 'designatio': 'designatio', 'operator_1': 'operator_1', 'operator_2': 'operator_2', 'wires': 'wires', 'voltage': 'voltage', 'operator': 'operator', 'name': 'name', 'location': 'location', 'layer': 'layer', 'frequency': 'frequency', 'cables': 'cables', 'end_date': 'end_date', 'ref': 'ref', 'type': 'type', 'route': 'route', 'was_voltag': 'was_voltag', 'was_phases': 'was_phases', 'was_cables': 'was_cables', 'utility': 'utility', 'material': 'material', 'seamark__1': 'seamark__1', 'check_date': 'check_date', 'survey_dat': 'survey_dat', 'mapillary': 'mapillary', 'busbar': 'busbar', 'minor_line': 'minor_line', 'voltage_se': 'voltage_se', 'voltage_pr': 'voltage_pr', 'not_operat': 'not_operat', 'barrier': 'barrier', 'substation': 'substation', 'addr_stree': 'addr_stree', 'path': 'path', });
lyr_PowerGeneratorPointROI_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'generator_': 'generator_', 'generato_1': 'generato_1', 'mapillary': 'mapillary', 'hub_height': 'hub_height', 'wikimedia_': 'wikimedia_', 'rating': 'rating', 'generato_2': 'generato_2', 'check_date': 'check_date', 'man_made': 'man_made', 'direction': 'direction', 'alt_name': 'alt_name', 'frequency': 'frequency', 'website': 'website', 'email': 'email', 'proposed_p': 'proposed_p', 'survey_dat': 'survey_dat', 'voltage': 'voltage', 'constructi': 'constructi', 'manufactur': 'manufactur', 'construc_1': 'construc_1', 'house': 'house', 'addr_stree': 'addr_stree', 'operator_w': 'operator_w', 'seamark_so': 'seamark_so', 'seamark_ra': 'seamark_ra', 'seamark__1': 'seamark__1', 'seamark_na': 'seamark_na', 'generato_3': 'generato_3', 'generato_4': 'generato_4', 'owner': 'owner', 'generato_5': 'generato_5', 'rotor_swep': 'rotor_swep', 'height_ran': 'height_ran', 'amenity': 'amenity', 'old_websit': 'old_websit', 'old_operat': 'old_operat', 'seamark_ty': 'seamark_ty', 'seamark_la': 'seamark_la', 'offshore': 'offshore', 'location': 'location', 'generato_6': 'generato_6', 'designatio': 'designatio', 'disused_po': 'disused_po', 'start_date': 'start_date', 'height': 'height', 'year_of_co': 'year_of_co', 'manufact_1': 'manufact_1', 'foot': 'foot', 'bicycle': 'bicycle', 'barrier': 'barrier', 'name': 'name', 'has_aerona': 'has_aerona', 'rotor_diam': 'rotor_diam', 'ref': 'ref', 'height_hub': 'height_hub', 'generato_7': 'generato_7', 'base_heigh': 'base_heigh', 'operator_1': 'operator_1', 'operator_2': 'operator_2', 'operator_t': 'operator_t', 'colour': 'colour', 'power': 'power', 'operator': 'operator', 'model': 'model', 'manufact_2': 'manufact_2', 'generato_8': 'generato_8', 'generato_9': 'generato_9', });
lyr_Solar_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'generator_': 'generator_', 'generato_1': 'generato_1', 'manufactur': 'manufactur', 'generato_2': 'generato_2', 'location': 'location', 'power': 'power', 'operator': 'operator', 'layer': 'layer', 'generato_3': 'generato_3', 'generato_4': 'generato_4', 'generato_5': 'generato_5', 'generato_6': 'generato_6', 'building': 'building', 'generato_7': 'generato_7', 'generato_8': 'generato_8', 'operator_w': 'operator_w', 'operator_1': 'operator_1', 'operator_g': 'operator_g', 'operator_2': 'operator_2', 'direction': 'direction', 'level': 'level', 'source_geo': 'source_geo', 'name': 'name', 'path': 'path', 'plant_sour': 'plant_sour', 'operator_3': 'operator_3', 'landuse': 'landuse', 'constructi': 'constructi', 'construc_1': 'construc_1', 'proposed_p': 'proposed_p', 'website': 'website', 'start_date': 'start_date', 'plant_outp': 'plant_outp', 'plant_meth': 'plant_meth', 'operator_4': 'operator_4', 'operator_5': 'operator_5', 'owner': 'owner', 'alt_name': 'alt_name', 'old_name': 'old_name', 'check_date': 'check_date', 'addr_place': 'addr_place', 'year_of_co': 'year_of_co', 'TYPEE': 'TYPEE', });
lyr_PowerPlantROI_8.set('fieldAliases', {'id': 'id', 'name': 'name', 'name_en': 'name_en', 'wikidata': 'wikidata', 'operator': 'operator', 'wd_operato': 'wd_operato', 'constructi': 'constructi', 'source': 'source', 'method': 'method', 'output': 'output', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_WindTurbinesIreland_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'generator_': 'generator_', 'mapillary': 'mapillary', 'hub_height': 'hub_height', 'check_date': 'check_date', 'website': 'website', 'email': 'email', 'proposed_p': 'proposed_p', 'constructi': 'constructi', 'manufactur': 'manufactur', 'construc_1': 'construc_1', 'operator_w': 'operator_w', 'seamark_so': 'seamark_so', 'seamark_ra': 'seamark_ra', 'seamark__1': 'seamark__1', 'seamark_na': 'seamark_na', 'owner': 'owner', 'rotor_swep': 'rotor_swep', 'height_ran': 'height_ran', 'old_websit': 'old_websit', 'old_operat': 'old_operat', 'seamark_ty': 'seamark_ty', 'seamark_la': 'seamark_la', 'offshore': 'offshore', 'designatio': 'designatio', 'disused_po': 'disused_po', 'start_date': 'start_date', 'height': 'height', 'year_of_co': 'year_of_co', 'manufact_1': 'manufact_1', 'name': 'name', 'has_aerona': 'has_aerona', 'rotor_diam': 'rotor_diam', 'ref': 'ref', 'height_hub': 'height_hub', 'generato_1': 'generato_1', 'base_heigh': 'base_heigh', 'operator_1': 'operator_1', 'operator_2': 'operator_2', 'operator_t': 'operator_t', 'colour': 'colour', 'power': 'power', 'operator': 'operator', 'model': 'model', 'manufact_2': 'manufact_2', 'generato_2': 'generato_2', 'generato_3': 'generato_3', 'generato_4': 'generato_4', });
lyr_TurbineLocationswElevationData_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'generator_': 'generator_', 'mapillary': 'mapillary', 'hub_height': 'hub_height', 'check_date': 'check_date', 'website': 'website', 'email': 'email', 'proposed_p': 'proposed_p', 'constructi': 'constructi', 'manufactur': 'manufactur', 'construc_1': 'construc_1', 'operator_w': 'operator_w', 'seamark_so': 'seamark_so', 'seamark_ra': 'seamark_ra', 'seamark__1': 'seamark__1', 'seamark_na': 'seamark_na', 'owner': 'owner', 'rotor_swep': 'rotor_swep', 'height_ran': 'height_ran', 'old_websit': 'old_websit', 'old_operat': 'old_operat', 'seamark_ty': 'seamark_ty', 'seamark_la': 'seamark_la', 'offshore': 'offshore', 'designatio': 'designatio', 'disused_po': 'disused_po', 'start_date': 'start_date', 'height': 'height', 'year_of_co': 'year_of_co', 'manufact_1': 'manufact_1', 'name': 'name', 'has_aerona': 'has_aerona', 'rotor_diam': 'rotor_diam', 'ref': 'ref', 'height_hub': 'height_hub', 'generato_1': 'generato_1', 'base_heigh': 'base_heigh', 'operator_1': 'operator_1', 'operator_2': 'operator_2', 'operator_t': 'operator_t', 'colour': 'colour', 'power': 'power', 'operator': 'operator', 'model': 'model', 'manufact_2': 'manufact_2', 'generato_2': 'generato_2', 'generato_3': 'generato_3', 'generato_4': 'generato_4', 'SAMPLE_1': 'SAMPLE_1', });
lyr_ECP24CategoryC_11.set('fieldAliases', {'Offer_Quar': 'Offer_Quar', 'Name_of_Fa': 'Name_of_Fa', 'Applicant_': 'Applicant_', 'County': 'County', 'Easting': 'Easting', 'Northing': 'Northing', 'ITM_Eastin': 'ITM_Eastin', 'ITM_Northi': 'ITM_Northi', 'Generator_': 'Generator_', 'MEC__MW_': 'MEC__MW_', 'Assumed_No': 'Assumed_No', });
lyr_ECP24CategoryB_12.set('fieldAliases', {'Offer_Quar': 'Offer_Quar', 'Name_of_Fa': 'Name_of_Fa', 'Applicant_': 'Applicant_', 'County': 'County', 'Easting': 'Easting', 'Northing': 'Northing', 'ITM_Eastin': 'ITM_Eastin', 'ITM_Northi': 'ITM_Northi', 'Generato_r': 'Generato_r', 'MEC__MW_': 'MEC__MW_', 'Assumed_No': 'Assumed_No', 'Planning_P': 'Planning_P', });
lyr_ECP24CategoryA_13.set('fieldAliases', {'Offer_Quar': 'Offer_Quar', 'Name_of_Fa': 'Name_of_Fa', 'Applicant': 'Applicant', 'County': 'County', 'Eastings': 'Eastings', 'Northin_gs': 'Northin_gs', 'ITM_Eastin': 'ITM_Eastin', 'ITM_Northi': 'ITM_Northi', 'Generation': 'Generation', 'MEC__MW_': 'MEC__MW_', 'Assumed_No': 'Assumed_No', 'PP_referen': 'PP_referen', });
lyr_ECP23CategoryC_14.set('fieldAliases', {'Offer_Quar': 'Offer_Quar', 'Name_of_Fa': 'Name_of_Fa', 'Applicant_': 'Applicant_', 'County': 'County', 'Easting': 'Easting', 'Northing': 'Northing', 'ITM_Eastin': 'ITM_Eastin', 'ITM_Northi': 'ITM_Northi', 'Generator_': 'Generator_', 'MEC__MW_': 'MEC__MW_', 'Assumed_No': 'Assumed_No', });
lyr_ECP23CategoryB_15.set('fieldAliases', {'Offer_Quar': 'Offer_Quar', 'Name_of_Fa': 'Name_of_Fa', 'Applicant_': 'Applicant_', 'County': 'County', 'Easting': 'Easting', 'Northing': 'Northing', 'ITM_Eastin': 'ITM_Eastin', 'ITM_Northi': 'ITM_Northi', 'Generator_': 'Generator_', 'MEC__MW_': 'MEC__MW_', 'Assumed_No': 'Assumed_No', 'Planning_P': 'Planning_P', });
lyr_ECP23CategoryA_16.set('fieldAliases', {'Offer_Quar': 'Offer_Quar', 'Name_of_Fa': 'Name_of_Fa', 'Applicant': 'Applicant', 'County': 'County', 'Easting': 'Easting', 'Northing': 'Northing', 'ITM_Eastin': 'ITM_Eastin', 'ITM_Northi': 'ITM_Northi', 'Generator_': 'Generator_', 'MEC__MW_': 'MEC__MW_', 'Assumed_No': 'Assumed_No', 'PP_Referen': 'PP_Referen', });
lyr_ECP22CategoryC_17.set('fieldAliases', {'Status': 'Status', 'Name_of_Fa': 'Name_of_Fa', 'Applicant': 'Applicant', 'County': 'County', 'Easting': 'Easting', 'Northing': 'Northing', 'ITM_Eastin': 'ITM_Eastin', 'ITM_Northi': 'ITM_Northi', 'Generator_': 'Generator_', 'MEC__MW_': 'MEC__MW_', 'Assumed_No': 'Assumed_No', });
lyr_ECP22CategoryB_18.set('fieldAliases', {'Status': 'Status', 'Name_of_Fa': 'Name_of_Fa', 'Applicant': 'Applicant', 'County': 'County', 'Easting': 'Easting', 'Northing': 'Northing', 'ITM_Eastin': 'ITM_Eastin', 'ITM_Northi': 'ITM_Northi', 'Generator_': 'Generator_', 'MEC__MW_': 'MEC__MW_', 'Assumed_No': 'Assumed_No', 'PP_Referen': 'PP_Referen', });
lyr_ECP22CategoryA_19.set('fieldAliases', {'Status': 'Status', 'Name_of_Fa': 'Name_of_Fa', 'Applicant': 'Applicant', 'County': 'County', 'Easting': 'Easting', 'Northing': 'Northing', 'ITM_Eastin': 'ITM_Eastin', 'ITM_Northi': 'ITM_Northi', 'Generato_r': 'Generato_r', 'MEC__MW_': 'MEC__MW_', 'Assumed_No': 'Assumed_No', 'PP_Referen': 'PP_Referen', });
lyr_ECP21CategoryC_20.set('fieldAliases', {'Offer_Quar': 'Offer_Quar', 'Name_of_Fa': 'Name_of_Fa', 'Applicant_': 'Applicant_', 'County': 'County', 'Easting': 'Easting', 'Northing': 'Northing', 'ITM_Eastin': 'ITM_Eastin', 'ITM_Northi': 'ITM_Northi', 'Generator_': 'Generator_', 'MEC__MW_': 'MEC__MW_', 'Assumed_No': 'Assumed_No', 'Offer_Type': 'Offer_Type', });
lyr_ECP21CategoryB_21.set('fieldAliases', {'Offer_Quar': 'Offer_Quar', 'Name_of_Fa': 'Name_of_Fa', 'Applicant_': 'Applicant_', 'County': 'County', 'Easting': 'Easting', 'Northing': 'Northing', 'ITM_Eastin': 'ITM_Eastin', 'ITM_Northi': 'ITM_Northi', 'Generator_': 'Generator_', 'MEC__MW_': 'MEC__MW_', 'Assumed_No': 'Assumed_No', 'PP_Referen': 'PP_Referen', });
lyr_ECP21CategoryA_22.set('fieldAliases', {'Offer_Quar': 'Offer_Quar', 'Name_of_Fa': 'Name_of_Fa', 'Applicant_': 'Applicant_', 'County': 'County', 'Easting': 'Easting', 'Northing': 'Northing', 'ITM_Eastin': 'ITM_Eastin', 'ITM_Northi': 'ITM_Northi', 'Generator_': 'Generator_', 'MEC__MW_': 'MEC__MW_', 'Node': 'Node', 'PP_Referen': 'PP_Referen', });
lyr_RESS3Wind_23.set('fieldAliases', {'Applicatio': 'Applicatio', 'Successful': 'Successful', 'Successf_1': 'Successf_1', 'Location': 'Location', 'Offer_Quan': 'Offer_Quan', 'Eligible_T': 'Eligible_T', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_RESS3Solar_24.set('fieldAliases', {'Applicatio': 'Applicatio', 'Successful': 'Successful', 'Successf_1': 'Successf_1', 'Location__': 'Location__', 'Offer_Quan': 'Offer_Quan', 'Eligible_T': 'Eligible_T', 'PP_Referen': 'PP_Referen', 'EASTINGS': 'EASTINGS', 'NORTHINGS': 'NORTHINGS', });
lyr_RESS2Wind_25.set('fieldAliases', {'Applicatio': 'Applicatio', 'Successful': 'Successful', 'Successf_1': 'Successf_1', 'Offer_Quan': 'Offer_Quan', 'Eligible_T': 'Eligible_T', 'Easting__I': 'Easting__I', 'Northing__': 'Northing__', });
lyr_RESS2Solar_26.set('fieldAliases', {'Applicatio': 'Applicatio', 'Successful': 'Successful', 'Successf_1': 'Successf_1', 'Offer_Quan': 'Offer_Quan', 'Eligible_T': 'Eligible_T', 'Easting__I': 'Easting__I', 'Northing__': 'Northing__', });
lyr_RESS1Wind_27.set('fieldAliases', {'Applicatio': 'Applicatio', 'Successful': 'Successful', 'Successf_1': 'Successf_1', 'Offer_Quan': 'Offer_Quan', 'Eligible_T': 'Eligible_T', 'Easting__I': 'Easting__I', 'Northing__': 'Northing__', 'X': 'X', 'Y': 'Y', 'Major': 'Major', 'Minor': 'Minor', 'AzField': 'AzField', });
lyr_RESS1Solar_28.set('fieldAliases', {'Applicatio': 'Applicatio', 'Successful': 'Successful', 'Successf_1': 'Successf_1', 'Offer_Quan': 'Offer_Quan', 'Eligible_T': 'Eligible_T', 'Easting__I': 'Easting__I', 'Northing__': 'Northing__', });
lyr_2022Now_29.set('fieldAliases', {'osm_id': 'osm_id', 'manufact_2': 'manufact_2', 'X': 'X', 'Y': 'Y', 'model': 'model', 'operator': 'operator', 'generato_5': 'generato_5', 'hub_height': 'hub_height', 'generator_': 'generator_', 'manufactur': 'manufactur', 'constructi': 'constructi', 'operator_w': 'operator_w', 'generato_8': 'generato_8', 'owner': 'owner', 'offshore': 'offshore', 'location': 'location', 'base_heigh': 'base_heigh', 'ref': 'ref', 'rotor_diam': 'rotor_diam', 'height_hub': 'height_hub', 'start_date': 'start_date', 'height': 'height', 'year_of_co': 'year_of_co', 'manufact_1': 'manufact_1', 'name': 'name', 'operator_t': 'operator_t', 'colour': 'colour', 'TYPE': 'TYPE', });
lyr_2022NowElevation_30.set('fieldAliases', {'osm_id': 'osm_id', 'manufact_2': 'manufact_2', 'X': 'X', 'Y': 'Y', 'model': 'model', 'operator': 'operator', 'generato_5': 'generato_5', 'hub_height': 'hub_height', 'generator_': 'generator_', 'manufactur': 'manufactur', 'constructi': 'constructi', 'operator_w': 'operator_w', 'generato_8': 'generato_8', 'owner': 'owner', 'offshore': 'offshore', 'location': 'location', 'base_heigh': 'base_heigh', 'ref': 'ref', 'rotor_diam': 'rotor_diam', 'height_hub': 'height_hub', 'start_date': 'start_date', 'height': 'height', 'year_of_co': 'year_of_co', 'manufact_1': 'manufact_1', 'name': 'name', 'operator_t': 'operator_t', 'colour': 'colour', 'TYPE': 'TYPE', 'SAMPLE_1': 'SAMPLE_1', });
lyr_20092022_31.set('fieldAliases', {'Windfarm_N': 'Windfarm_N', 'DSO_TSO': 'DSO_TSO', 'Connection': 'Connection', 'County': 'County', 'Present_St': 'Present_St', 'Installed_': 'Installed_', 'MEC__MW_': 'MEC__MW_', 'Gate': 'Gate', 'F110kV_Nod': 'F110kV_Nod', 'Target_Con': 'Target_Con', 'Date_of_Co': 'Date_of_Co', 'Year_of_Co': 'Year_of_Co', 'Nat_Grid_E': 'Nat_Grid_E', 'Nat_Grid_N': 'Nat_Grid_N', 'Type': 'Type', });
lyr_20092022Elevation_32.set('fieldAliases', {'Windfarm_N': 'Windfarm_N', 'DSO_TSO': 'DSO_TSO', 'Connection': 'Connection', 'County': 'County', 'Present_St': 'Present_St', 'Installed_': 'Installed_', 'MEC__MW_': 'MEC__MW_', 'Gate': 'Gate', 'F110kV_Nod': 'F110kV_Nod', 'Target_Con': 'Target_Con', 'Date_of_Co': 'Date_of_Co', 'Year_of_Co': 'Year_of_Co', 'Nat_Grid_E': 'Nat_Grid_E', 'Nat_Grid_N': 'Nat_Grid_N', 'Type': 'Type', 'SAMPLE_1': 'SAMPLE_1', });
lyr_19922008_33.set('fieldAliases', {'Windfarm_N': 'Windfarm_N', 'DSO_TSO': 'DSO_TSO', 'Connection': 'Connection', 'County': 'County', 'Present_St': 'Present_St', 'Installed_': 'Installed_', 'MEC__MW_': 'MEC__MW_', 'Gate': 'Gate', 'F110kV_Nod': 'F110kV_Nod', 'Target_Con': 'Target_Con', 'Date_of_Co': 'Date_of_Co', 'Year_of_Co': 'Year_of_Co', 'Nat_Grid_E': 'Nat_Grid_E', 'Nat_Grid_N': 'Nat_Grid_N', 'Type': 'Type', });
lyr_19922008Elevation_34.set('fieldAliases', {'Windfarm_N': 'Windfarm_N', 'DSO_TSO': 'DSO_TSO', 'Connection': 'Connection', 'County': 'County', 'Present_St': 'Present_St', 'Installed_': 'Installed_', 'MEC__MW_': 'MEC__MW_', 'Gate': 'Gate', 'F110kV_Nod': 'F110kV_Nod', 'Target_Con': 'Target_Con', 'Date_of_Co': 'Date_of_Co', 'Year_of_Co': 'Year_of_Co', 'Nat_Grid_E': 'Nat_Grid_E', 'Nat_Grid_N': 'Nat_Grid_N', 'Type': 'Type', 'SAMPLE_1': 'SAMPLE_1', });
lyr_AllWindFarmsto2022_35.set('fieldAliases', {'Windfarm_N': 'Windfarm_N', 'DSO_TSO': 'DSO_TSO', 'Connection': 'Connection', 'County': 'County', 'Present_St': 'Present_St', 'Installed_': 'Installed_', 'MEC__MW_': 'MEC__MW_', 'Gate': 'Gate', 'F110kV_Nod': 'F110kV_Nod', 'Target_Con': 'Target_Con', 'Date_of_Co': 'Date_of_Co', 'Year_of_Co': 'Year_of_Co', 'Nat_Grid_E': 'Nat_Grid_E', 'Nat_Grid_N': 'Nat_Grid_N', 'Type': 'Type', });
lyr_AllCountyBorders_1.set('fieldImages', {'CO_ID': 'TextEdit', 'ENGLISH': 'TextEdit', 'GAEILGE': 'TextEdit', 'LOGAINM_ID': 'TextEdit', 'GUID': 'TextEdit', 'CONTAE': 'TextEdit', 'COUNTY': 'TextEdit', 'PROVINCE': 'TextEdit', 'CENTROID_X': 'TextEdit', 'CENTROID_Y': 'TextEdit', 'AREA': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ABPTurbineCases2019toNow_2.set('fieldImages', {'ABPCASEID': '', 'DEVDESC': '', 'DEVADDRESS': '', 'LODGEDON': '', 'DECISION': '', 'DECIDED_ON': '', 'LINKABPWEB': '', 'PLANINGATY': '', 'CATEGORY': '', 'UPDATED_ON': '', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CCTurbineCases2019toNow_3.set('fieldImages', {'PlanningAu': 'TextEdit', 'Applicatio': 'TextEdit', 'Developmen': 'TextEdit', 'Developm_1': 'TextEdit', 'Developm_2': 'TextEdit', 'ITMEasting': 'TextEdit', 'ITMNorthin': 'TextEdit', 'Applicat_1': 'TextEdit', 'Applicat_2': 'TextEdit', 'Decision': 'TextEdit', 'LandUseCod': 'TextEdit', 'AreaofSite': 'TextEdit', 'NumResiden': 'TextEdit', 'OneOffHous': 'TextEdit', 'FloorArea': 'TextEdit', 'ReceivedDa': 'DateTime', 'WithdrawnD': 'DateTime', 'DecisionDa': 'DateTime', 'DecisionDu': 'DateTime', 'GrantDate': 'DateTime', 'ExpiryDate': 'DateTime', 'AppealRefN': 'TextEdit', 'AppealStat': 'TextEdit', 'AppealDeci': 'TextEdit', 'AppealDe_1': 'DateTime', 'AppealSubm': 'DateTime', 'FIRequestD': 'DateTime', 'FIRecDate': 'DateTime', 'LinkAppDet': 'TextEdit', 'OneOffKPI': 'TextEdit', 'ETL_DATE': 'DateTime', 'SiteId': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AllSubstationsIreland_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Station_Na': 'TextEdit', 'GenAvailab': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Generation': 'TextEdit', 'Generati_1': 'TextEdit', 'PrimarykV': 'TextEdit', 'Secondary_': 'TextEdit', 'VoltageCla': 'TextEdit', 'Transforme': 'TextEdit', 'InstalledC': 'TextEdit', 'DemandData': 'TextEdit', 'DemandFirm': 'TextEdit', 'DemandAvai': 'TextEdit', 'ParentAvai': 'TextEdit', 'DemandPare': 'TextEdit', 'Generati_2': 'TextEdit', 'Generati_3': 'TextEdit', 'Generati_4': 'TextEdit', 'Generati_5': 'TextEdit', 'Generati_6': 'TextEdit', 'Generati_7': 'TextEdit', 'GenAvail_1': 'TextEdit', 'Generati_8': 'TextEdit', 'GeneralDat': 'TextEdit', 'ParentFeed': 'TextEdit', 'ParentStat': 'TextEdit', 'TSOInterfa': 'TextEdit', 'Comment': 'TextEdit', 'Field30': 'TextEdit', 'Field31': 'TextEdit', });
lyr_PowerLinesRepublicofIreland_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'power': 'TextEdit', 'operator_t': 'TextEdit', 'old_name__': 'TextEdit', 'abandoned_': 'TextEdit', 'name_en': 'TextEdit', 'start_date': 'TextEdit', 'line': 'TextEdit', 'operator_w': 'TextEdit', 'year_of_co': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'website': 'TextEdit', 'submarine': 'TextEdit', 'seamark_ty': 'TextEdit', 'seamark_ca': 'TextEdit', 'rating': 'TextEdit', 'owner': 'TextEdit', 'descriptio': 'TextEdit', 'circuits': 'TextEdit', 'alt_name': 'TextEdit', 'phases': 'TextEdit', 'designatio': 'TextEdit', 'operator_1': 'TextEdit', 'operator_2': 'TextEdit', 'wires': 'TextEdit', 'voltage': 'TextEdit', 'operator': 'TextEdit', 'name': 'TextEdit', 'location': 'TextEdit', 'layer': 'TextEdit', 'frequency': 'TextEdit', 'cables': 'TextEdit', 'end_date': 'TextEdit', 'ref': 'TextEdit', 'type': 'TextEdit', 'route': 'TextEdit', 'was_voltag': 'TextEdit', 'was_phases': 'TextEdit', 'was_cables': 'TextEdit', 'utility': 'TextEdit', 'material': 'TextEdit', 'seamark__1': 'TextEdit', 'check_date': 'TextEdit', 'survey_dat': 'TextEdit', 'mapillary': 'TextEdit', 'busbar': 'TextEdit', 'minor_line': 'TextEdit', 'voltage_se': 'TextEdit', 'voltage_pr': 'TextEdit', 'not_operat': 'TextEdit', 'barrier': 'TextEdit', 'substation': 'TextEdit', 'addr_stree': 'TextEdit', 'path': 'TextEdit', });
lyr_PowerGeneratorPointROI_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'generator_': 'TextEdit', 'generato_1': 'TextEdit', 'mapillary': 'TextEdit', 'hub_height': 'TextEdit', 'wikimedia_': 'TextEdit', 'rating': 'TextEdit', 'generato_2': 'TextEdit', 'check_date': 'TextEdit', 'man_made': 'TextEdit', 'direction': 'TextEdit', 'alt_name': 'TextEdit', 'frequency': 'TextEdit', 'website': 'TextEdit', 'email': 'TextEdit', 'proposed_p': 'TextEdit', 'survey_dat': 'TextEdit', 'voltage': 'TextEdit', 'constructi': 'TextEdit', 'manufactur': 'TextEdit', 'construc_1': 'TextEdit', 'house': 'TextEdit', 'addr_stree': 'TextEdit', 'operator_w': 'TextEdit', 'seamark_so': 'TextEdit', 'seamark_ra': 'TextEdit', 'seamark__1': 'TextEdit', 'seamark_na': 'TextEdit', 'generato_3': 'TextEdit', 'generato_4': 'TextEdit', 'owner': 'TextEdit', 'generato_5': 'TextEdit', 'rotor_swep': 'TextEdit', 'height_ran': 'TextEdit', 'amenity': 'TextEdit', 'old_websit': 'TextEdit', 'old_operat': 'TextEdit', 'seamark_ty': 'TextEdit', 'seamark_la': 'TextEdit', 'offshore': 'TextEdit', 'location': 'TextEdit', 'generato_6': 'TextEdit', 'designatio': 'TextEdit', 'disused_po': 'TextEdit', 'start_date': 'TextEdit', 'height': 'TextEdit', 'year_of_co': 'TextEdit', 'manufact_1': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'barrier': 'TextEdit', 'name': 'TextEdit', 'has_aerona': 'TextEdit', 'rotor_diam': 'TextEdit', 'ref': 'TextEdit', 'height_hub': 'TextEdit', 'generato_7': 'TextEdit', 'base_heigh': 'TextEdit', 'operator_1': 'TextEdit', 'operator_2': 'TextEdit', 'operator_t': 'TextEdit', 'colour': 'TextEdit', 'power': 'TextEdit', 'operator': 'TextEdit', 'model': 'TextEdit', 'manufact_2': 'TextEdit', 'generato_8': 'TextEdit', 'generato_9': 'TextEdit', });
lyr_Solar_7.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'generator_': '', 'generato_1': '', 'manufactur': '', 'generato_2': '', 'location': '', 'power': '', 'operator': '', 'layer': '', 'generato_3': '', 'generato_4': '', 'generato_5': '', 'generato_6': '', 'building': '', 'generato_7': '', 'generato_8': '', 'operator_w': '', 'operator_1': '', 'operator_g': '', 'operator_2': '', 'direction': '', 'level': '', 'source_geo': '', 'name': '', 'path': '', 'plant_sour': '', 'operator_3': '', 'landuse': '', 'constructi': '', 'construc_1': '', 'proposed_p': '', 'website': '', 'start_date': '', 'plant_outp': '', 'plant_meth': '', 'operator_4': '', 'operator_5': '', 'owner': '', 'alt_name': '', 'old_name': '', 'check_date': '', 'addr_place': '', 'year_of_co': '', 'TYPEE': '', });
lyr_PowerPlantROI_8.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'name_en': 'TextEdit', 'wikidata': 'TextEdit', 'operator': 'TextEdit', 'wd_operato': 'TextEdit', 'constructi': 'TextEdit', 'source': 'TextEdit', 'method': 'TextEdit', 'output': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_WindTurbinesIreland_9.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'generator_': '', 'mapillary': 'TextEdit', 'hub_height': '', 'check_date': 'TextEdit', 'website': 'TextEdit', 'email': 'TextEdit', 'proposed_p': '', 'constructi': '', 'manufactur': '', 'construc_1': '', 'operator_w': '', 'seamark_so': '', 'seamark_ra': '', 'seamark__1': '', 'seamark_na': '', 'owner': 'TextEdit', 'rotor_swep': '', 'height_ran': '', 'old_websit': '', 'old_operat': '', 'seamark_ty': '', 'seamark_la': '', 'offshore': 'TextEdit', 'designatio': '', 'disused_po': '', 'start_date': 'TextEdit', 'height': 'TextEdit', 'year_of_co': '', 'manufact_1': '', 'name': 'TextEdit', 'has_aerona': '', 'rotor_diam': '', 'ref': 'TextEdit', 'height_hub': '', 'generato_1': '', 'base_heigh': '', 'operator_1': '', 'operator_2': '', 'operator_t': '', 'colour': 'TextEdit', 'power': 'TextEdit', 'operator': 'TextEdit', 'model': 'TextEdit', 'manufact_2': '', 'generato_2': '', 'generato_3': '', 'generato_4': '', });
lyr_TurbineLocationswElevationData_10.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'generator_': '', 'mapillary': '', 'hub_height': '', 'check_date': '', 'website': '', 'email': '', 'proposed_p': '', 'constructi': '', 'manufactur': '', 'construc_1': '', 'operator_w': '', 'seamark_so': '', 'seamark_ra': '', 'seamark__1': '', 'seamark_na': '', 'owner': '', 'rotor_swep': '', 'height_ran': '', 'old_websit': '', 'old_operat': '', 'seamark_ty': '', 'seamark_la': '', 'offshore': '', 'designatio': '', 'disused_po': '', 'start_date': '', 'height': '', 'year_of_co': '', 'manufact_1': '', 'name': '', 'has_aerona': '', 'rotor_diam': '', 'ref': '', 'height_hub': '', 'generato_1': '', 'base_heigh': '', 'operator_1': '', 'operator_2': '', 'operator_t': '', 'colour': '', 'power': '', 'operator': '', 'model': '', 'manufact_2': '', 'generato_2': '', 'generato_3': '', 'generato_4': '', 'SAMPLE_1': '', });
lyr_ECP24CategoryC_11.set('fieldImages', {'Offer_Quar': 'TextEdit', 'Name_of_Fa': 'TextEdit', 'Applicant_': 'TextEdit', 'County': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'ITM_Eastin': 'TextEdit', 'ITM_Northi': 'TextEdit', 'Generator_': 'TextEdit', 'MEC__MW_': 'TextEdit', 'Assumed_No': '', });
lyr_ECP24CategoryB_12.set('fieldImages', {'Offer_Quar': 'TextEdit', 'Name_of_Fa': 'TextEdit', 'Applicant_': 'TextEdit', 'County': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'ITM_Eastin': 'TextEdit', 'ITM_Northi': 'TextEdit', 'Generato_r': '', 'MEC__MW_': 'TextEdit', 'Assumed_No': '', 'Planning_P': '', });
lyr_ECP24CategoryA_13.set('fieldImages', {'Offer_Quar': 'TextEdit', 'Name_of_Fa': 'TextEdit', 'Applicant': '', 'County': 'TextEdit', 'Eastings': '', 'Northin_gs': '', 'ITM_Eastin': 'TextEdit', 'ITM_Northi': 'TextEdit', 'Generation': '', 'MEC__MW_': 'TextEdit', 'Assumed_No': '', 'PP_referen': '', });
lyr_ECP23CategoryC_14.set('fieldImages', {'Offer_Quar': 'TextEdit', 'Name_of_Fa': 'TextEdit', 'Applicant_': 'TextEdit', 'County': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'ITM_Eastin': 'TextEdit', 'ITM_Northi': 'TextEdit', 'Generator_': 'TextEdit', 'MEC__MW_': 'TextEdit', 'Assumed_No': '', });
lyr_ECP23CategoryB_15.set('fieldImages', {'Offer_Quar': 'TextEdit', 'Name_of_Fa': 'TextEdit', 'Applicant_': 'TextEdit', 'County': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'ITM_Eastin': 'TextEdit', 'ITM_Northi': 'TextEdit', 'Generator_': 'TextEdit', 'MEC__MW_': 'TextEdit', 'Assumed_No': '', 'Planning_P': '', });
lyr_ECP23CategoryA_16.set('fieldImages', {'Offer_Quar': 'TextEdit', 'Name_of_Fa': 'TextEdit', 'Applicant': '', 'County': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'ITM_Eastin': 'TextEdit', 'ITM_Northi': 'TextEdit', 'Generator_': 'TextEdit', 'MEC__MW_': 'TextEdit', 'Assumed_No': '', 'PP_Referen': 'TextEdit', });
lyr_ECP22CategoryC_17.set('fieldImages', {'Status': '', 'Name_of_Fa': 'TextEdit', 'Applicant': '', 'County': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'ITM_Eastin': 'TextEdit', 'ITM_Northi': 'TextEdit', 'Generator_': 'TextEdit', 'MEC__MW_': 'TextEdit', 'Assumed_No': '', });
lyr_ECP22CategoryB_18.set('fieldImages', {'Status': '', 'Name_of_Fa': 'TextEdit', 'Applicant': '', 'County': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'ITM_Eastin': 'TextEdit', 'ITM_Northi': 'TextEdit', 'Generator_': 'TextEdit', 'MEC__MW_': 'TextEdit', 'Assumed_No': '', 'PP_Referen': 'TextEdit', });
lyr_ECP22CategoryA_19.set('fieldImages', {'Status': '', 'Name_of_Fa': 'TextEdit', 'Applicant': '', 'County': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'ITM_Eastin': 'TextEdit', 'ITM_Northi': 'TextEdit', 'Generato_r': '', 'MEC__MW_': 'TextEdit', 'Assumed_No': '', 'PP_Referen': 'TextEdit', });
lyr_ECP21CategoryC_20.set('fieldImages', {'Offer_Quar': 'TextEdit', 'Name_of_Fa': 'TextEdit', 'Applicant_': 'TextEdit', 'County': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'ITM_Eastin': 'TextEdit', 'ITM_Northi': 'TextEdit', 'Generator_': 'TextEdit', 'MEC__MW_': 'TextEdit', 'Assumed_No': '', 'Offer_Type': '', });
lyr_ECP21CategoryB_21.set('fieldImages', {'Offer_Quar': 'TextEdit', 'Name_of_Fa': 'TextEdit', 'Applicant_': 'TextEdit', 'County': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'ITM_Eastin': 'TextEdit', 'ITM_Northi': 'TextEdit', 'Generator_': 'TextEdit', 'MEC__MW_': 'TextEdit', 'Assumed_No': '', 'PP_Referen': 'TextEdit', });
lyr_ECP21CategoryA_22.set('fieldImages', {'Offer_Quar': 'TextEdit', 'Name_of_Fa': 'TextEdit', 'Applicant_': 'TextEdit', 'County': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'ITM_Eastin': 'TextEdit', 'ITM_Northi': 'TextEdit', 'Generator_': 'TextEdit', 'MEC__MW_': 'TextEdit', 'Node': 'TextEdit', 'PP_Referen': 'TextEdit', });
lyr_RESS3Wind_23.set('fieldImages', {'Applicatio': 'TextEdit', 'Successful': 'TextEdit', 'Successf_1': 'TextEdit', 'Location': '', 'Offer_Quan': 'TextEdit', 'Eligible_T': 'TextEdit', 'Easting': '', 'Northing': '', });
lyr_RESS3Solar_24.set('fieldImages', {'Applicatio': 'TextEdit', 'Successful': 'TextEdit', 'Successf_1': 'TextEdit', 'Location__': '', 'Offer_Quan': 'TextEdit', 'Eligible_T': 'TextEdit', 'PP_Referen': '', 'EASTINGS': '', 'NORTHINGS': '', });
lyr_RESS2Wind_25.set('fieldImages', {'Applicatio': 'TextEdit', 'Successful': 'TextEdit', 'Successf_1': 'TextEdit', 'Offer_Quan': 'TextEdit', 'Eligible_T': 'TextEdit', 'Easting__I': 'TextEdit', 'Northing__': 'TextEdit', });
lyr_RESS2Solar_26.set('fieldImages', {'Applicatio': 'TextEdit', 'Successful': 'TextEdit', 'Successf_1': 'TextEdit', 'Offer_Quan': 'TextEdit', 'Eligible_T': 'TextEdit', 'Easting__I': 'TextEdit', 'Northing__': 'TextEdit', });
lyr_RESS1Wind_27.set('fieldImages', {'Applicatio': 'TextEdit', 'Successful': 'TextEdit', 'Successf_1': 'TextEdit', 'Offer_Quan': 'TextEdit', 'Eligible_T': 'TextEdit', 'Easting__I': 'TextEdit', 'Northing__': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Major': 'Range', 'Minor': 'TextEdit', 'AzField': 'TextEdit', });
lyr_RESS1Solar_28.set('fieldImages', {'Applicatio': 'TextEdit', 'Successful': 'TextEdit', 'Successf_1': 'TextEdit', 'Offer_Quan': 'TextEdit', 'Eligible_T': 'TextEdit', 'Easting__I': 'TextEdit', 'Northing__': 'TextEdit', });
lyr_2022Now_29.set('fieldImages', {'osm_id': '', 'manufact_2': '', 'X': 'TextEdit', 'Y': 'TextEdit', 'model': '', 'operator': '', 'generato_5': '', 'hub_height': '', 'generator_': '', 'manufactur': '', 'constructi': '', 'operator_w': '', 'generato_8': '', 'owner': '', 'offshore': '', 'location': '', 'base_heigh': '', 'ref': '', 'rotor_diam': '', 'height_hub': '', 'start_date': '', 'height': '', 'year_of_co': '', 'manufact_1': '', 'name': '', 'operator_t': '', 'colour': '', 'TYPE': '', });
lyr_2022NowElevation_30.set('fieldImages', {'osm_id': '', 'manufact_2': '', 'X': '', 'Y': '', 'model': '', 'operator': '', 'generato_5': '', 'hub_height': '', 'generator_': '', 'manufactur': '', 'constructi': '', 'operator_w': '', 'generato_8': '', 'owner': '', 'offshore': '', 'location': '', 'base_heigh': '', 'ref': '', 'rotor_diam': '', 'height_hub': '', 'start_date': '', 'height': '', 'year_of_co': '', 'manufact_1': '', 'name': '', 'operator_t': '', 'colour': '', 'TYPE': '', 'SAMPLE_1': 'Range', });
lyr_20092022_31.set('fieldImages', {'Windfarm_N': '', 'DSO_TSO': '', 'Connection': '', 'County': '', 'Present_St': '', 'Installed_': '', 'MEC__MW_': '', 'Gate': '', 'F110kV_Nod': '', 'Target_Con': '', 'Date_of_Co': '', 'Year_of_Co': '', 'Nat_Grid_E': '', 'Nat_Grid_N': '', 'Type': '', });
lyr_20092022Elevation_32.set('fieldImages', {'Windfarm_N': 'TextEdit', 'DSO_TSO': 'TextEdit', 'Connection': 'TextEdit', 'County': 'TextEdit', 'Present_St': 'TextEdit', 'Installed_': 'TextEdit', 'MEC__MW_': 'TextEdit', 'Gate': 'TextEdit', 'F110kV_Nod': 'TextEdit', 'Target_Con': 'TextEdit', 'Date_of_Co': 'TextEdit', 'Year_of_Co': 'TextEdit', 'Nat_Grid_E': 'TextEdit', 'Nat_Grid_N': 'TextEdit', 'Type': 'TextEdit', 'SAMPLE_1': 'Range', });
lyr_19922008_33.set('fieldImages', {'Windfarm_N': '', 'DSO_TSO': '', 'Connection': '', 'County': '', 'Present_St': '', 'Installed_': '', 'MEC__MW_': '', 'Gate': '', 'F110kV_Nod': '', 'Target_Con': '', 'Date_of_Co': '', 'Year_of_Co': '', 'Nat_Grid_E': '', 'Nat_Grid_N': '', 'Type': '', });
lyr_19922008Elevation_34.set('fieldImages', {'Windfarm_N': 'TextEdit', 'DSO_TSO': 'TextEdit', 'Connection': 'TextEdit', 'County': 'TextEdit', 'Present_St': 'TextEdit', 'Installed_': 'TextEdit', 'MEC__MW_': 'TextEdit', 'Gate': 'TextEdit', 'F110kV_Nod': 'TextEdit', 'Target_Con': 'TextEdit', 'Date_of_Co': 'TextEdit', 'Year_of_Co': 'TextEdit', 'Nat_Grid_E': 'TextEdit', 'Nat_Grid_N': 'TextEdit', 'Type': 'TextEdit', 'SAMPLE_1': 'Range', });
lyr_AllWindFarmsto2022_35.set('fieldImages', {'Windfarm_N': 'TextEdit', 'DSO_TSO': 'TextEdit', 'Connection': 'TextEdit', 'County': 'TextEdit', 'Present_St': 'TextEdit', 'Installed_': 'TextEdit', 'MEC__MW_': 'TextEdit', 'Gate': 'TextEdit', 'F110kV_Nod': 'TextEdit', 'Target_Con': 'TextEdit', 'Date_of_Co': 'TextEdit', 'Year_of_Co': 'TextEdit', 'Nat_Grid_E': 'TextEdit', 'Nat_Grid_N': 'TextEdit', 'Type': 'TextEdit', });
lyr_AllCountyBorders_1.set('fieldLabels', {'CO_ID': 'no label', 'ENGLISH': 'no label', 'GAEILGE': 'no label', 'LOGAINM_ID': 'no label', 'GUID': 'no label', 'CONTAE': 'no label', 'COUNTY': 'no label', 'PROVINCE': 'no label', 'CENTROID_X': 'no label', 'CENTROID_Y': 'no label', 'AREA': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ABPTurbineCases2019toNow_2.set('fieldLabels', {'ABPCASEID': 'no label', 'DEVDESC': 'no label', 'DEVADDRESS': 'no label', 'LODGEDON': 'no label', 'DECISION': 'no label', 'DECIDED_ON': 'no label', 'LINKABPWEB': 'no label', 'PLANINGATY': 'no label', 'CATEGORY': 'no label', 'UPDATED_ON': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_CCTurbineCases2019toNow_3.set('fieldLabels', {'PlanningAu': 'no label', 'Applicatio': 'no label', 'Developmen': 'no label', 'Developm_1': 'no label', 'Developm_2': 'no label', 'ITMEasting': 'no label', 'ITMNorthin': 'no label', 'Applicat_1': 'no label', 'Applicat_2': 'no label', 'Decision': 'no label', 'LandUseCod': 'no label', 'AreaofSite': 'no label', 'NumResiden': 'no label', 'OneOffHous': 'no label', 'FloorArea': 'no label', 'ReceivedDa': 'no label', 'WithdrawnD': 'no label', 'DecisionDa': 'no label', 'DecisionDu': 'no label', 'GrantDate': 'no label', 'ExpiryDate': 'no label', 'AppealRefN': 'no label', 'AppealStat': 'no label', 'AppealDeci': 'no label', 'AppealDe_1': 'no label', 'AppealSubm': 'no label', 'FIRequestD': 'no label', 'FIRecDate': 'no label', 'LinkAppDet': 'no label', 'OneOffKPI': 'no label', 'ETL_DATE': 'no label', 'SiteId': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_AllSubstationsIreland_4.set('fieldLabels', {'OBJECTID': 'no label', 'Station_Na': 'no label', 'GenAvailab': 'no label', 'X': 'no label', 'Y': 'no label', 'Generation': 'no label', 'Generati_1': 'no label', 'PrimarykV': 'no label', 'Secondary_': 'no label', 'VoltageCla': 'no label', 'Transforme': 'no label', 'InstalledC': 'no label', 'DemandData': 'no label', 'DemandFirm': 'no label', 'DemandAvai': 'no label', 'ParentAvai': 'no label', 'DemandPare': 'no label', 'Generati_2': 'no label', 'Generati_3': 'no label', 'Generati_4': 'no label', 'Generati_5': 'no label', 'Generati_6': 'no label', 'Generati_7': 'no label', 'GenAvail_1': 'no label', 'Generati_8': 'no label', 'GeneralDat': 'no label', 'ParentFeed': 'no label', 'ParentStat': 'no label', 'TSOInterfa': 'no label', 'Comment': 'no label', 'Field30': 'no label', 'Field31': 'no label', });
lyr_PowerLinesRepublicofIreland_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'power': 'no label', 'operator_t': 'no label', 'old_name__': 'no label', 'abandoned_': 'no label', 'name_en': 'no label', 'start_date': 'no label', 'line': 'no label', 'operator_w': 'no label', 'year_of_co': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'website': 'no label', 'submarine': 'no label', 'seamark_ty': 'no label', 'seamark_ca': 'no label', 'rating': 'no label', 'owner': 'no label', 'descriptio': 'no label', 'circuits': 'no label', 'alt_name': 'no label', 'phases': 'no label', 'designatio': 'no label', 'operator_1': 'no label', 'operator_2': 'no label', 'wires': 'no label', 'voltage': 'no label', 'operator': 'no label', 'name': 'no label', 'location': 'no label', 'layer': 'no label', 'frequency': 'no label', 'cables': 'no label', 'end_date': 'no label', 'ref': 'no label', 'type': 'no label', 'route': 'no label', 'was_voltag': 'no label', 'was_phases': 'no label', 'was_cables': 'no label', 'utility': 'no label', 'material': 'no label', 'seamark__1': 'no label', 'check_date': 'no label', 'survey_dat': 'no label', 'mapillary': 'no label', 'busbar': 'no label', 'minor_line': 'no label', 'voltage_se': 'no label', 'voltage_pr': 'no label', 'not_operat': 'no label', 'barrier': 'no label', 'substation': 'no label', 'addr_stree': 'no label', 'path': 'no label', });
lyr_PowerGeneratorPointROI_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'generator_': 'no label', 'generato_1': 'no label', 'mapillary': 'no label', 'hub_height': 'no label', 'wikimedia_': 'no label', 'rating': 'no label', 'generato_2': 'no label', 'check_date': 'no label', 'man_made': 'no label', 'direction': 'no label', 'alt_name': 'no label', 'frequency': 'no label', 'website': 'no label', 'email': 'no label', 'proposed_p': 'no label', 'survey_dat': 'no label', 'voltage': 'no label', 'constructi': 'no label', 'manufactur': 'no label', 'construc_1': 'no label', 'house': 'no label', 'addr_stree': 'no label', 'operator_w': 'no label', 'seamark_so': 'no label', 'seamark_ra': 'no label', 'seamark__1': 'no label', 'seamark_na': 'no label', 'generato_3': 'no label', 'generato_4': 'no label', 'owner': 'no label', 'generato_5': 'no label', 'rotor_swep': 'no label', 'height_ran': 'no label', 'amenity': 'no label', 'old_websit': 'no label', 'old_operat': 'no label', 'seamark_ty': 'no label', 'seamark_la': 'no label', 'offshore': 'no label', 'location': 'no label', 'generato_6': 'no label', 'designatio': 'no label', 'disused_po': 'no label', 'start_date': 'no label', 'height': 'no label', 'year_of_co': 'no label', 'manufact_1': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'barrier': 'no label', 'name': 'no label', 'has_aerona': 'no label', 'rotor_diam': 'no label', 'ref': 'no label', 'height_hub': 'no label', 'generato_7': 'no label', 'base_heigh': 'no label', 'operator_1': 'no label', 'operator_2': 'no label', 'operator_t': 'no label', 'colour': 'no label', 'power': 'no label', 'operator': 'no label', 'model': 'no label', 'manufact_2': 'no label', 'generato_8': 'no label', 'generato_9': 'no label', });
lyr_Solar_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'generator_': 'no label', 'generato_1': 'no label', 'manufactur': 'no label', 'generato_2': 'no label', 'location': 'no label', 'power': 'no label', 'operator': 'no label', 'layer': 'no label', 'generato_3': 'no label', 'generato_4': 'no label', 'generato_5': 'no label', 'generato_6': 'no label', 'building': 'no label', 'generato_7': 'no label', 'generato_8': 'no label', 'operator_w': 'no label', 'operator_1': 'no label', 'operator_g': 'no label', 'operator_2': 'no label', 'direction': 'no label', 'level': 'no label', 'source_geo': 'no label', 'name': 'no label', 'path': 'no label', 'plant_sour': 'no label', 'operator_3': 'no label', 'landuse': 'no label', 'constructi': 'no label', 'construc_1': 'no label', 'proposed_p': 'no label', 'website': 'no label', 'start_date': 'no label', 'plant_outp': 'no label', 'plant_meth': 'no label', 'operator_4': 'no label', 'operator_5': 'no label', 'owner': 'no label', 'alt_name': 'no label', 'old_name': 'no label', 'check_date': 'no label', 'addr_place': 'no label', 'year_of_co': 'no label', 'TYPEE': 'no label', });
lyr_PowerPlantROI_8.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'name_en': 'no label', 'wikidata': 'no label', 'operator': 'no label', 'wd_operato': 'no label', 'constructi': 'no label', 'source': 'no label', 'method': 'no label', 'output': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_WindTurbinesIreland_9.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'generator_': 'no label', 'mapillary': 'no label', 'hub_height': 'no label', 'check_date': 'no label', 'website': 'no label', 'email': 'no label', 'proposed_p': 'no label', 'constructi': 'no label', 'manufactur': 'no label', 'construc_1': 'no label', 'operator_w': 'no label', 'seamark_so': 'no label', 'seamark_ra': 'no label', 'seamark__1': 'no label', 'seamark_na': 'no label', 'owner': 'no label', 'rotor_swep': 'no label', 'height_ran': 'no label', 'old_websit': 'no label', 'old_operat': 'no label', 'seamark_ty': 'no label', 'seamark_la': 'no label', 'offshore': 'no label', 'designatio': 'no label', 'disused_po': 'no label', 'start_date': 'no label', 'height': 'no label', 'year_of_co': 'no label', 'manufact_1': 'no label', 'name': 'no label', 'has_aerona': 'no label', 'rotor_diam': 'no label', 'ref': 'no label', 'height_hub': 'no label', 'generato_1': 'no label', 'base_heigh': 'no label', 'operator_1': 'no label', 'operator_2': 'no label', 'operator_t': 'no label', 'colour': 'no label', 'power': 'no label', 'operator': 'no label', 'model': 'no label', 'manufact_2': 'no label', 'generato_2': 'no label', 'generato_3': 'no label', 'generato_4': 'no label', });
lyr_TurbineLocationswElevationData_10.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'generator_': 'no label', 'mapillary': 'no label', 'hub_height': 'no label', 'check_date': 'no label', 'website': 'no label', 'email': 'no label', 'proposed_p': 'no label', 'constructi': 'no label', 'manufactur': 'no label', 'construc_1': 'no label', 'operator_w': 'no label', 'seamark_so': 'no label', 'seamark_ra': 'no label', 'seamark__1': 'no label', 'seamark_na': 'no label', 'owner': 'no label', 'rotor_swep': 'no label', 'height_ran': 'no label', 'old_websit': 'no label', 'old_operat': 'no label', 'seamark_ty': 'no label', 'seamark_la': 'no label', 'offshore': 'no label', 'designatio': 'no label', 'disused_po': 'no label', 'start_date': 'no label', 'height': 'no label', 'year_of_co': 'no label', 'manufact_1': 'no label', 'name': 'no label', 'has_aerona': 'no label', 'rotor_diam': 'no label', 'ref': 'no label', 'height_hub': 'no label', 'generato_1': 'no label', 'base_heigh': 'no label', 'operator_1': 'no label', 'operator_2': 'no label', 'operator_t': 'no label', 'colour': 'no label', 'power': 'no label', 'operator': 'no label', 'model': 'no label', 'manufact_2': 'no label', 'generato_2': 'no label', 'generato_3': 'no label', 'generato_4': 'no label', 'SAMPLE_1': 'no label', });
lyr_ECP24CategoryC_11.set('fieldLabels', {'Offer_Quar': 'no label', 'Name_of_Fa': 'no label', 'Applicant_': 'no label', 'County': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'ITM_Eastin': 'no label', 'ITM_Northi': 'no label', 'Generator_': 'no label', 'MEC__MW_': 'no label', 'Assumed_No': 'no label', });
lyr_ECP24CategoryB_12.set('fieldLabels', {'Offer_Quar': 'no label', 'Name_of_Fa': 'no label', 'Applicant_': 'no label', 'County': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'ITM_Eastin': 'no label', 'ITM_Northi': 'no label', 'Generato_r': 'no label', 'MEC__MW_': 'no label', 'Assumed_No': 'no label', 'Planning_P': 'no label', });
lyr_ECP24CategoryA_13.set('fieldLabels', {'Offer_Quar': 'no label', 'Name_of_Fa': 'no label', 'Applicant': 'no label', 'County': 'no label', 'Eastings': 'no label', 'Northin_gs': 'no label', 'ITM_Eastin': 'no label', 'ITM_Northi': 'no label', 'Generation': 'no label', 'MEC__MW_': 'no label', 'Assumed_No': 'no label', 'PP_referen': 'no label', });
lyr_ECP23CategoryC_14.set('fieldLabels', {'Offer_Quar': 'no label', 'Name_of_Fa': 'no label', 'Applicant_': 'no label', 'County': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'ITM_Eastin': 'no label', 'ITM_Northi': 'no label', 'Generator_': 'no label', 'MEC__MW_': 'no label', 'Assumed_No': 'no label', });
lyr_ECP23CategoryB_15.set('fieldLabels', {'Offer_Quar': 'no label', 'Name_of_Fa': 'no label', 'Applicant_': 'no label', 'County': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'ITM_Eastin': 'no label', 'ITM_Northi': 'no label', 'Generator_': 'no label', 'MEC__MW_': 'no label', 'Assumed_No': 'no label', 'Planning_P': 'no label', });
lyr_ECP23CategoryA_16.set('fieldLabels', {'Offer_Quar': 'no label', 'Name_of_Fa': 'no label', 'Applicant': 'no label', 'County': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'ITM_Eastin': 'no label', 'ITM_Northi': 'no label', 'Generator_': 'no label', 'MEC__MW_': 'no label', 'Assumed_No': 'no label', 'PP_Referen': 'no label', });
lyr_ECP22CategoryC_17.set('fieldLabels', {'Status': 'no label', 'Name_of_Fa': 'no label', 'Applicant': 'no label', 'County': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'ITM_Eastin': 'no label', 'ITM_Northi': 'no label', 'Generator_': 'no label', 'MEC__MW_': 'no label', 'Assumed_No': 'no label', });
lyr_ECP22CategoryB_18.set('fieldLabels', {'Status': 'no label', 'Name_of_Fa': 'no label', 'Applicant': 'no label', 'County': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'ITM_Eastin': 'no label', 'ITM_Northi': 'no label', 'Generator_': 'no label', 'MEC__MW_': 'no label', 'Assumed_No': 'no label', 'PP_Referen': 'no label', });
lyr_ECP22CategoryA_19.set('fieldLabels', {'Status': 'no label', 'Name_of_Fa': 'no label', 'Applicant': 'no label', 'County': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'ITM_Eastin': 'no label', 'ITM_Northi': 'no label', 'Generato_r': 'no label', 'MEC__MW_': 'no label', 'Assumed_No': 'no label', 'PP_Referen': 'no label', });
lyr_ECP21CategoryC_20.set('fieldLabels', {'Offer_Quar': 'no label', 'Name_of_Fa': 'no label', 'Applicant_': 'no label', 'County': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'ITM_Eastin': 'no label', 'ITM_Northi': 'no label', 'Generator_': 'no label', 'MEC__MW_': 'no label', 'Assumed_No': 'no label', 'Offer_Type': 'no label', });
lyr_ECP21CategoryB_21.set('fieldLabels', {'Offer_Quar': 'no label', 'Name_of_Fa': 'no label', 'Applicant_': 'no label', 'County': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'ITM_Eastin': 'no label', 'ITM_Northi': 'no label', 'Generator_': 'no label', 'MEC__MW_': 'no label', 'Assumed_No': 'no label', 'PP_Referen': 'no label', });
lyr_ECP21CategoryA_22.set('fieldLabels', {'Offer_Quar': 'no label', 'Name_of_Fa': 'no label', 'Applicant_': 'no label', 'County': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'ITM_Eastin': 'no label', 'ITM_Northi': 'no label', 'Generator_': 'no label', 'MEC__MW_': 'no label', 'Node': 'no label', 'PP_Referen': 'no label', });
lyr_RESS3Wind_23.set('fieldLabels', {'Applicatio': 'no label', 'Successful': 'no label', 'Successf_1': 'no label', 'Location': 'no label', 'Offer_Quan': 'no label', 'Eligible_T': 'no label', 'Easting': 'no label', 'Northing': 'no label', });
lyr_RESS3Solar_24.set('fieldLabels', {'Applicatio': 'no label', 'Successful': 'no label', 'Successf_1': 'no label', 'Location__': 'no label', 'Offer_Quan': 'no label', 'Eligible_T': 'no label', 'PP_Referen': 'no label', 'EASTINGS': 'no label', 'NORTHINGS': 'no label', });
lyr_RESS2Wind_25.set('fieldLabels', {'Applicatio': 'no label', 'Successful': 'no label', 'Successf_1': 'no label', 'Offer_Quan': 'no label', 'Eligible_T': 'no label', 'Easting__I': 'no label', 'Northing__': 'no label', });
lyr_RESS2Solar_26.set('fieldLabels', {'Applicatio': 'no label', 'Successful': 'no label', 'Successf_1': 'no label', 'Offer_Quan': 'no label', 'Eligible_T': 'no label', 'Easting__I': 'no label', 'Northing__': 'no label', });
lyr_RESS1Wind_27.set('fieldLabels', {'Applicatio': 'no label', 'Successful': 'no label', 'Successf_1': 'no label', 'Offer_Quan': 'no label', 'Eligible_T': 'no label', 'Easting__I': 'no label', 'Northing__': 'no label', 'X': 'no label', 'Y': 'no label', 'Major': 'no label', 'Minor': 'no label', 'AzField': 'no label', });
lyr_RESS1Solar_28.set('fieldLabels', {'Applicatio': 'no label', 'Successful': 'no label', 'Successf_1': 'no label', 'Offer_Quan': 'no label', 'Eligible_T': 'no label', 'Easting__I': 'no label', 'Northing__': 'no label', });
lyr_2022Now_29.set('fieldLabels', {'osm_id': 'no label', 'manufact_2': 'no label', 'X': 'no label', 'Y': 'no label', 'model': 'no label', 'operator': 'no label', 'generato_5': 'no label', 'hub_height': 'no label', 'generator_': 'no label', 'manufactur': 'no label', 'constructi': 'no label', 'operator_w': 'no label', 'generato_8': 'no label', 'owner': 'no label', 'offshore': 'no label', 'location': 'no label', 'base_heigh': 'no label', 'ref': 'no label', 'rotor_diam': 'no label', 'height_hub': 'no label', 'start_date': 'no label', 'height': 'no label', 'year_of_co': 'no label', 'manufact_1': 'no label', 'name': 'no label', 'operator_t': 'no label', 'colour': 'no label', 'TYPE': 'no label', });
lyr_2022NowElevation_30.set('fieldLabels', {'osm_id': 'no label', 'manufact_2': 'no label', 'X': 'no label', 'Y': 'no label', 'model': 'no label', 'operator': 'no label', 'generato_5': 'no label', 'hub_height': 'no label', 'generator_': 'no label', 'manufactur': 'no label', 'constructi': 'no label', 'operator_w': 'no label', 'generato_8': 'no label', 'owner': 'no label', 'offshore': 'no label', 'location': 'no label', 'base_heigh': 'no label', 'ref': 'no label', 'rotor_diam': 'no label', 'height_hub': 'no label', 'start_date': 'no label', 'height': 'no label', 'year_of_co': 'no label', 'manufact_1': 'no label', 'name': 'no label', 'operator_t': 'no label', 'colour': 'no label', 'TYPE': 'no label', 'SAMPLE_1': 'no label', });
lyr_20092022_31.set('fieldLabels', {'Windfarm_N': 'no label', 'DSO_TSO': 'no label', 'Connection': 'no label', 'County': 'no label', 'Present_St': 'no label', 'Installed_': 'no label', 'MEC__MW_': 'no label', 'Gate': 'no label', 'F110kV_Nod': 'no label', 'Target_Con': 'no label', 'Date_of_Co': 'no label', 'Year_of_Co': 'no label', 'Nat_Grid_E': 'no label', 'Nat_Grid_N': 'no label', 'Type': 'no label', });
lyr_20092022Elevation_32.set('fieldLabels', {'Windfarm_N': 'no label', 'DSO_TSO': 'no label', 'Connection': 'no label', 'County': 'no label', 'Present_St': 'no label', 'Installed_': 'no label', 'MEC__MW_': 'no label', 'Gate': 'no label', 'F110kV_Nod': 'no label', 'Target_Con': 'no label', 'Date_of_Co': 'no label', 'Year_of_Co': 'no label', 'Nat_Grid_E': 'no label', 'Nat_Grid_N': 'no label', 'Type': 'no label', 'SAMPLE_1': 'no label', });
lyr_19922008_33.set('fieldLabels', {'Windfarm_N': 'no label', 'DSO_TSO': 'no label', 'Connection': 'no label', 'County': 'no label', 'Present_St': 'no label', 'Installed_': 'no label', 'MEC__MW_': 'no label', 'Gate': 'no label', 'F110kV_Nod': 'no label', 'Target_Con': 'no label', 'Date_of_Co': 'no label', 'Year_of_Co': 'no label', 'Nat_Grid_E': 'no label', 'Nat_Grid_N': 'no label', 'Type': 'no label', });
lyr_19922008Elevation_34.set('fieldLabels', {'Windfarm_N': 'no label', 'DSO_TSO': 'no label', 'Connection': 'no label', 'County': 'no label', 'Present_St': 'no label', 'Installed_': 'no label', 'MEC__MW_': 'no label', 'Gate': 'no label', 'F110kV_Nod': 'no label', 'Target_Con': 'no label', 'Date_of_Co': 'no label', 'Year_of_Co': 'no label', 'Nat_Grid_E': 'no label', 'Nat_Grid_N': 'no label', 'Type': 'no label', 'SAMPLE_1': 'no label', });
lyr_AllWindFarmsto2022_35.set('fieldLabels', {'Windfarm_N': 'no label', 'DSO_TSO': 'no label', 'Connection': 'no label', 'County': 'no label', 'Present_St': 'no label', 'Installed_': 'no label', 'MEC__MW_': 'no label', 'Gate': 'no label', 'F110kV_Nod': 'no label', 'Target_Con': 'no label', 'Date_of_Co': 'no label', 'Year_of_Co': 'no label', 'Nat_Grid_E': 'no label', 'Nat_Grid_N': 'no label', 'Type': 'no label', });
lyr_AllWindFarmsto2022_35.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});