/* 
 * Note: Coordinate locations are usually programmed with the positive y axis pointing downwards, but I have reversed it
 * so that it makes more sense for non-programmers to change variables and treat it like a normal coordinate system.
 * Change the x and y variables as you normally would on a plot.
 */

// Variables (change these as you wish)
origin_offset = [-30, -30]; // x, y
margins = 10;
line_dash = 2.5; // determines spacing and size of the dashed axis lines
axis_size = 200; // length of the axis lines
arrow_angle = 45/2; // degrees, determines the "sharpness" of the arrows
point_size = 5; // size of the points
redLineWidth = 2;
axisLineWidth = 1.9;
blackLineWidth = 0.6;
italics = true;

// Example fonts: Times New Roman, Calibri, Helvetica
font = "Times New Roman";

var lastCoordinate; // used to store the last known coordinates

// Setting up the Canvas element
canvas = new fabric.StaticCanvas('c');
canvas.setDimensions({width: axis_size*2 + margins, height: axis_size*2 + margins});
centerX = canvas.getWidth()/2 + origin_offset[0];
centerY = canvas.getHeight()/2 - origin_offset[1];

// Drawing the plot

// Special symbols for reference (to copy and paste)
// X̂ Ŷ Ẑ x̂ ŷ ẑ ₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉ r̄ ϴ θ

// axis lines
drawLine(0, 0, axis_size, 0, true, true, false, "black", 5, axisLineWidth, "X", 10, 0, false, false, true);
drawLine(0, 0, axis_size, 90, true, 1, false, "black", 5, axisLineWidth, "Y", -5, 14, false, false, true);
drawLine(0, 0, axis_size, 180 + 90/2, true, 1, false, "black", 5, axisLineWidth, "Z", -20, -15, false, false, true);
// red lines
drawLine(0, 0, axis_size, 20, false, 1, false, "red", 5, redLineWidth, "x", 18, 5, false, false, true);
drawLine(0, 0, axis_size, 20 + 90, false, 1, false, "red", 5, redLineWidth, "y", -5, 18, false, false, true);
drawLine(0, 0, 150, 180 + 90/2, false, 1, false, "red", 5, redLineWidth, "z", 10, -10, false, false, true);
// black lines with points
drawLine(0, 0, 100, 20 + 180, false, 1, true, "black", 4, blackLineWidth, "m1", -40, -5, false, true);
drawSpecificLine(lastCoordinate[0], lastCoordinate[1], 100, 150, false, 1, true, "black", 4, blackLineWidth, "m3", 10, 25, false, true);
drawSpecificLine(0, 0, 100, 150, false, 1, true, "black", 4, blackLineWidth, "", 0, 0);
drawLine(0, 0, 180, 20, false, 1, true, "black", 4, blackLineWidth, "m2", 15, -10, false, true);
drawSpecificLine(lastCoordinate[0], lastCoordinate[1], 100, 150, false, 1, true, "black", 4, blackLineWidth, "", 0, 0);
// extra text labels
createText("r1", -65, -35, "black", false, true, false, true);
createText("r13", -65, 30, "black", false, true, false, true);
createText("r3", 80, 100, "black", false, true, false, true);
createText("r2", 90, 55, "black", false, true, false, true);
createText("r23", 140, 110, "black", false, true, false, true);
createText("O", 0, -15, "black", false);

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

// Helper functions

function downloadPDF(svg) {
    let doc = new PDFDocument({compress: false});
    SVGtoPDF(doc, svg, 0, 0);
    let stream = doc.pipe(blobStream());
    stream.on('finish', () => {
      let blob = stream.toBlob('application/pdf');
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = "CR3BP.pdf";
      link.click();
    });
    doc.end();
}

function save() {
    filedata = canvas.toSVG();
    locfile = new Blob([filedata], {type: "image/svg+xml;charset=utf-8"});
    locfilesrc = URL.createObjectURL(locfile);
    download = document.getElementById('downloadSvg');
    download.innerHTML = "<a href=" + locfilesrc + " download='CR3BP.svg'>Download SVG file</a>";
    downloadPDF(filedata);
}

function createText(labelText, labelX, labelY, color, overline, subscript, hat, bold) {
    text = new fabric.Text(labelText, {
        fontFamily: font,
        left: centerX + labelX,
        top: centerY - labelY,
        fontSize: 20,
        fill: color,
        originX: 'left',
        originY: 'center',
        subscript: { size: 0.5, baseline: 0.2 }
    });
    if (subscript) {
        text.setSubscript(1, 3);
    }
    if (italics) {
        text.fontStyle = "italic";
    }
    if (bold) {
        text.fontWeight = "bold";
    }
    if (overline) {
        line = new fabric.Line([centerX + labelX + 3, centerY - labelY - 6, centerX + labelX + 9, centerY - labelY - 6], {
            stroke: color,
            strokeWidth: 0.7,
            originX: 'center',
            originY: 'center'
        });
        canvas.add(line);
    }
    if (hat) {
        hat_height = 7;
        x_offset = 0.5;
        if (labelText == 'X' || labelText == 'Y' || labelText == 'Z') {
            hat_height = 11;
            x_offset = 3;
        }  
        line = new fabric.Line([centerX + labelX + 1.5 + x_offset, centerY - labelY - hat_height, centerX + labelX + 5.5 + x_offset, centerY - labelY - hat_height - 4], {
            stroke: color,
            strokeWidth: 0.7,
            originX: 'center',
            originY: 'center'
        });
        canvas.add(line);
        line = new fabric.Line([centerX + labelX + 5.5 + x_offset, centerY - labelY - hat_height - 4, centerX + labelX + 9.5 + x_offset, centerY - labelY - hat_height], {
            stroke: color,
            strokeWidth: 0.7,
            originX: 'center',
            originY: 'center'
        });
        canvas.add(line);

    }
    canvas.add(text);
}

/* 
 * Line function used knowing the start and end coordinates exactly
 * @Input:
 * x1, y1 = coordinates of first point relative to origin
 * x2, y2 = coordinates of second point relative to origin
 * dashed = true/false
 * arrow = true/false
 * point = true/false, adds a circular point at the end
 * color = string for the color
 * arrowSize = size of the arrows
 * lineWidth = width of the lines
 * labelText = text of the label
 * labelX = text offset in x direction
 * labelY = text offset in y direction
 * overline = true/false
 * subscript = true/false
 * hat = true/false
 */
function drawSpecificLine(x1, y1, x2, y2, dashed, arrow, point, color, arrowSize, lineWidth, labelText, labelX, labelY, overline, subscript, hat) {
    lastCoordinate = [x2, y2];

    angle = Math.atan2(y2-y1, x2-x1); // radians
    if (angle < 0) {
        angle = angle + (2 * Math.PI); // always positive radian for simplicity and visualization
    }

    if (point) {
        point = new fabric.Circle({
            radius: point_size,
            fill: color,
            left: centerX + x2,
            top: centerY - y2,
            originX: 'center',
            originY: 'center'
        });
        canvas.add(point);
        x2 = x2 - point_size * 2 * Math.cos(angle);
        y2 = y2 - point_size * 2 * Math.sin(angle);
    }
    
    line = new fabric.Line([centerX + x1, centerY - y1, centerX + x2, centerY - y2], {
        stroke: color,
        strokeWidth: lineWidth,
        originX: 'center',
        originY: 'center'
    });
    if (dashed) {
        line.strokeDashArray = [line_dash, line_dash];
    }
    canvas.add(line);

    sharpness_angle_1 = Math.PI + angle - (Math.PI/2) + (arrow_angle * Math.PI/180);
    sharpness_angle_2 = Math.PI + angle + (Math.PI/2) - (arrow_angle * Math.PI/180);
    point1 = [x2 + arrowSize * Math.cos(sharpness_angle_1), y2 + arrowSize * Math.sin(sharpness_angle_1)];
    point2 = [x2 + arrowSize * Math.cos(sharpness_angle_2), y2 + arrowSize * Math.sin(sharpness_angle_2)];
    point3 = [x2 + (arrowSize * 1.5) * Math.cos(angle), y2 + arrowSize * Math.sin(angle)];

    if (arrow) {
        polygon = new fabric.Polygon([
        { x: centerX + point1[0], y: centerY - point1[1] },
        { x: centerX + point2[0], y: centerY - point2[1] },
        { x: centerX + point3[0], y: centerY - point3[1] }], {
            fill: color
        });
        canvas.add(polygon);
    }

    createText(labelText, x2 + labelX, y2 + labelY, color, overline, subscript, hat);
}

/* 
 * Line function used knowing the starting position, length, and angle
 * @Input:
 * x1, y1 = coordinates of first point relative to origin
 * length = length of the line
 * angle = angle in degrees, counter clockwise from positive x axis
 * dashed = true/false
 * arrow = true/false
 * point = true/false, adds a circular point at the end
 * color = string for the color
 * arrowSize = size of the arrows
 * lineWidth = width of the lines
 * labelText = text of the label
 * labelX = text offset in x direction
 * labelY = text offset in y direction
 * overline = true/false
 * subscript = true/false
 * hat = true/false
 */
function drawLine(x1, y1, length, angle, dashed, arrow, point, color, arrowSize, lineWidth, labelText, labelX, labelY, overline, subscript, hat) {
    angle_rad = angle * Math.PI/180;
    drawSpecificLine(x1, y1, x1 + length * Math.cos(angle_rad), y1 + length * Math.sin(angle_rad), dashed, arrow, point, color, arrowSize, lineWidth, labelText, labelX, labelY, overline, subscript, hat);
}