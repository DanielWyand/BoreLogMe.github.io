const uploadInput = document.querySelector("#fileUpload");

const kmlstr = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2" xmlns:kml="http://www.opengis.net/kml/2.2" xmlns:atom="http://www.w3.org/2005/Atom">
<Document>
	<name>Carrier FS.kml</name>
	<open>1</open>
	<StyleMap id="don_b">
		<Pair>
			<key>normal</key>
			<styleUrl>#sn_don_b</styleUrl>
		</Pair>
		<Pair>
			<key>highlight</key>
			<styleUrl>#sh_don_b</styleUrl>
		</Pair>
	</StyleMap>
	<Style id="s_ylw-pushpin_hl">
		<IconStyle>
			<scale>1.3</scale>
			<Icon>
				<href>http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png</href>
			</Icon>
			<hotSpot x="20" y="2" xunits="pixels" yunits="pixels"/>
		</IconStyle>
	</Style>
	<Style id="sh_don_b">
		<IconStyle>
			<Icon>
				<href>http://maps.google.com/mapfiles/kml/shapes/donut.png</href>
			</Icon>
		</IconStyle>
	</Style>
	<StyleMap id="don_b0">
		<Pair>
			<key>normal</key>
			<styleUrl>#sn_don_b0</styleUrl>
		</Pair>
		<Pair>
			<key>highlight</key>
			<styleUrl>#sh_don_b0</styleUrl>
		</Pair>
	</StyleMap>
	<Style id="s_ylw-pushpin">
		<IconStyle>
			<scale>1.1</scale>
			<Icon>
				<href>http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png</href>
			</Icon>
			<hotSpot x="20" y="2" xunits="pixels" yunits="pixels"/>
		</IconStyle>
	</Style>
	<Style id="sh_don_b0">
		<IconStyle>
			<Icon>
				<href>http://maps.google.com/mapfiles/kml/shapes/donut.png</href>
			</Icon>
		</IconStyle>
	</Style>
	<Style id="sn_don_b">
		<IconStyle>
			<scale>0.8</scale>
			<Icon>
				<href>http://maps.google.com/mapfiles/kml/shapes/donut.png</href>
			</Icon>
		</IconStyle>
	</Style>
	<StyleMap id="m_ylw-pushpin">
		<Pair>
			<key>normal</key>
			<styleUrl>#s_ylw-pushpin</styleUrl>
		</Pair>
		<Pair>
			<key>highlight</key>
			<styleUrl>#s_ylw-pushpin_hl</styleUrl>
		</Pair>
	</StyleMap>
	<Style id="sn_don_b0">
		<IconStyle>
			<scale>0.8</scale>
			<Icon>
				<href>http://maps.google.com/mapfiles/kml/shapes/donut.png</href>
			</Icon>
		</IconStyle>
	</Style>
	<Placemark>
		<name>MW-1</name>
		<description>abbc</description>
		<styleUrl>#don_b</styleUrl>
		<Point>
			<coordinates>113.179128248109,23.2176752606841,0</coordinates>
		</Point>
	</Placemark>
	<Placemark>
		<name>MW-2</name>
		<styleUrl>#don_b0</styleUrl>
		<Point>
			<coordinates>113.179775809924,23.2166460422738,0</coordinates>
		</Point>
	</Placemark>
	<Placemark>
		<name>MW-3</name>
		<styleUrl>#don_b0</styleUrl>
		<Point>
			<coordinates>113.179494973731,23.2155935828419,0</coordinates>
		</Point>
	</Placemark>
	<Placemark>
		<name>MW-4</name>
		<styleUrl>#don_b0</styleUrl>
		<Point>
			<coordinates>113.180422281932,23.2149487157859,0</coordinates>
		</Point>
	</Placemark>
	<Placemark>
		<name>MW-5</name>
		<styleUrl>#don_b0</styleUrl>
		<Point>
			<coordinates>113.181009521987,23.2144169064781,0</coordinates>
		</Point>
	</Placemark>
	<Placemark>
		<name>MW-6</name>
		<styleUrl>#don_b0</styleUrl>
		<Point>
			<coordinates>113.178779693686,23.2136533065018,0</coordinates>
		</Point>
	</Placemark>
	<Placemark>
		<name>MW-7</name>
		<styleUrl>#don_b0</styleUrl>
		<Point>
			<coordinates>113.178812454251,23.2150703536199,0</coordinates>
		</Point>
	</Placemark>
	<Placemark>
		<name>MW-8</name>
		<styleUrl>#don_b0</styleUrl>
		<Point>
			<coordinates>113.177322599124,23.2153618581466,0</coordinates>
		</Point>
	</Placemark>
	<Placemark>
		<name>MW-9</name>
		<styleUrl>#don_b0</styleUrl>
		<Point>
			<coordinates>113.177496321873,23.2170387849638,0</coordinates>
		</Point>
	</Placemark>
	<Placemark>
		<name>未命名多边形</name>
		<styleUrl>#m_ylw-pushpin</styleUrl>
		<Polygon>
			<tessellate>1</tessellate>
			<outerBoundaryIs>
				<LinearRing>
					<coordinates>
						113.1779300102494,23.21659716791854,0 113.1779225233761,23.21448409490223,0 113.1792981647934,23.21391688167745,0 113.1810801007459,23.21547352549237,0 113.1795604316121,23.21544467942568,0 113.1797631411338,23.21662007460558,0 113.18005265118,23.21678863002766,0 113.1791593320162,23.21786692315614,0 113.1779300102494,23.21659716791854,0 
					</coordinates>
				</LinearRing>
			</outerBoundaryIs>
		</Polygon>
	</Placemark>
</Document>
</kml>`;

var droptarget = document.getElementById("droptarget");

droptarget.addEventListener("drop", function (event) {
    event.preventDefault(); //禁止浏览器默认行为，浏览器默认会直接打开显示
    if (event.type === "drop") {
        var files = event.dataTransfer.files;
        readFile(files);
        console.log(files.length);
        console.log(
            `文件名称:${files[0].name},文件类型:${files[0].type},文件大小:${files[0].size} bytes`
        );
    }
    event.target.classList.remove("ondrop");
});
droptarget.addEventListener("dragenter", function (event) {
    event.preventDefault();
    event.target.classList.add("ondrop");
});
droptarget.addEventListener("dragleave", function (event) {
    event.preventDefault();
    event.target.classList.remove("ondrop");
});
droptarget.addEventListener("dragover", function (event) {
    event.preventDefault();
});

function readFile(files) {
    // let regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt|.kml)$/;
    let result;

    // if (regex.test(uploadInput.value.toLowerCase())) {
    let reader = new FileReader();

    reader.onload = function (e) {
        result = extractKmlCoords(e.target.result);
        console.log(result);
    };

    reader.readAsText(files[0]);
    // }
}

function extractKmlCoords(plainText) {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(plainText, "text/xml");
    let googlePolygons = [];
    let googleMarkers = [];

    console.log(xmlDoc);

    if (xmlDoc.documentElement.nodeName == "kml") {
        for (const item of xmlDoc.getElementsByTagName("Placemark")) {
            let placeMarkName = item
                .getElementsByTagName("name")[0]
                .childNodes[0].nodeValue.trim();
            let polygons = item.getElementsByTagName("Polygon");
            let markers = item.getElementsByTagName("Point");

            /** POLYGONS PARSE **/
            for (const polygon of polygons) {
                let coords = polygon
                    .getElementsByTagName("coordinates")[0]
                    .childNodes[0].nodeValue.trim();
                let points = coords.split(" ");

                let googlePolygonsPaths = [];
                for (const point of points) {
                    let coord = point.split(",");
                    googlePolygonsPaths.push({
                        lat: +coord[1],
                        lng: +coord[0],
                    });
                }
                googlePolygons.push({
                    name: placeMarkName,
                    polygon: googlePolygonsPaths,
                });
            }

            /** MARKER PARSE **/
            for (const marker of markers) {
                var coords = marker
                    .getElementsByTagName("coordinates")[0]
                    .childNodes[0].nodeValue.trim();
                let coord = coords.split(",");
                googleMarkers.push({
                    name: placeMarkName,
                    lat: +coord[1],
                    lng: +coord[0],
                });
            }
        }
    } else {
        throw "error while parsing";
    }

    return { markers: googleMarkers, polygons: googlePolygons };
}
