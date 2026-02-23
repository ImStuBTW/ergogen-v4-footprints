module.exports = {
  params: {
    designator: 'MCU',
    side: 'F',
    P0: { type: 'net', value: 'P0' },
    P1: { type: 'net', value: 'P1' },
    P2: { type: 'net', value: 'P2' },
    P3: { type: 'net', value: 'P3' },
    P4: { type: 'net', value: 'P4' },
    P5: { type: 'net', value: 'P5' },
    P6: { type: 'net', value: 'P6' },
    P7: { type: 'net', value: 'P7' },
    P8: { type: 'net', value: 'P8' },
    P9: { type: 'net', value: 'P9' },
    P10: { type: 'net', value: 'P10' },
    RAW3V3: { type: 'net', value: '3V3' },
    GND: { type: 'net', value: 'GND' },
    RAW5V: { type: 'net', value: '5V' },
    SWCLK: { type: 'net', value: 'SWCLK' },
    SWDIO: { type: 'net', value: 'SWDIO' },
    RST: { type: 'net', value: 'RST' },
    BAT_POS: { type: 'net', value: 'BAT_POS' },
    BAT_NEG: { type: 'net', value: 'BAT_NEG' },
    NFC1: { type: 'net', value: 'NFC1' },
    NFC2: { type: 'net', value: 'NFC2' },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "XIAO-BLE"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr through_hole)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" thru_hole oval (at -7.62 ${flipN(flip, -7.62)} ${flipR(flip, p.r + 0)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P0})`);
fp.push(`(pad "2" thru_hole oval (at -7.62 ${flipN(flip, -5.08)} ${flipR(flip, p.r + 0)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P1})`);
fp.push(`(pad "3" thru_hole oval (at -7.62 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 0)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P2})`);
fp.push(`(pad "4" thru_hole oval (at -7.62 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P3})`);
fp.push(`(pad "5" thru_hole oval (at -7.62 ${flipN(flip, 2.54)} ${flipR(flip, p.r + 0)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P4})`);
fp.push(`(pad "6" thru_hole oval (at -7.62 ${flipN(flip, 5.08)} ${flipR(flip, p.r + 0)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P5})`);
fp.push(`(pad "7" thru_hole oval (at -7.62 ${flipN(flip, 7.62)} ${flipR(flip, p.r + 0)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P6})`);
fp.push(`(pad "8" thru_hole oval (at 7.62 ${flipN(flip, 7.62)} ${flipR(flip, p.r + 180)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P7})`);
fp.push(`(pad "9" thru_hole oval (at 7.62 ${flipN(flip, 5.08)} ${flipR(flip, p.r + 180)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P8})`);
fp.push(`(pad "10" thru_hole oval (at 7.62 ${flipN(flip, 2.54)} ${flipR(flip, p.r + 180)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P9})`);
fp.push(`(pad "11" thru_hole oval (at 7.62 ${flipN(flip, 0)} ${flipR(flip, p.r + 180)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P10})`);
fp.push(`(pad "12" thru_hole oval (at 7.62 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 180)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.RAW3V3})`);
fp.push(`(pad "13" thru_hole oval (at 7.62 ${flipN(flip, -5.08)} ${flipR(flip, p.r + 180)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GND})`);
fp.push(`(pad "14" thru_hole oval (at 7.62 ${flipN(flip, -7.62)} ${flipR(flip, p.r + 180)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.RAW5V})`);
fp.push(`(pad "15" thru_hole circle (at -1.27 ${flipN(flip, -8.572)} ${flipR(flip, p.r + 90)}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.SWCLK})`);
fp.push(`(pad "16" thru_hole circle (at 1.27 ${flipN(flip, -8.572)} ${flipR(flip, p.r + 90)}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.SWDIO})`);
fp.push(`(pad "17" thru_hole circle (at -1.27 ${flipN(flip, -6.032)} ${flipR(flip, p.r + 90)}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GND})`);
fp.push(`(pad "18" thru_hole circle (at 1.27 ${flipN(flip, -6.032)} ${flipR(flip, p.r + 90)}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.RST})`);
fp.push(`(pad "19" thru_hole circle (at -4.445 ${flipN(flip, -0.317)} ${flipR(flip, p.r + 180)}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.BAT_POS})`);
fp.push(`(pad "20" thru_hole circle (at -4.445 ${flipN(flip, -2.222)} ${flipR(flip, p.r + 180)}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.BAT_NEG})`);
fp.push(`(pad "21" thru_hole circle (at 3.802408 ${flipN(flip, 8.801408)} ${flipR(flip, p.r + 270)}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.NFC1})`);
fp.push(`(pad "22" thru_hole circle (at 5.707408 ${flipN(flip, 8.801408)} ${flipR(flip, p.r + 270)}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.NFC2})`);

// Drawings on Edge.Cuts
fp.push(`(fp_line (start -4.699 ${flipN(flip, -1.7902)}) (end -4.699 ${flipN(flip, -0.7488)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start -4.0132 ${flipN(flip, -2.476)}) (end -2.413 ${flipN(flip, -2.476)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start -4.0132 ${flipN(flip, -0.063)}) (end -2.413 ${flipN(flip, -0.063)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start -2.032 ${flipN(flip, -2.095)}) (end -2.032 ${flipN(flip, -0.444)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start -1.524 ${flipN(flip, -8.1402)}) (end -1.524 ${flipN(flip, -6.4638)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start -0.8382 ${flipN(flip, -8.826)}) (end 0.8382 ${flipN(flip, -8.826)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start -0.8382 ${flipN(flip, -5.778)}) (end 0.8382 ${flipN(flip, -5.778)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start 1.524 ${flipN(flip, -8.1402)}) (end 1.524 ${flipN(flip, -6.4638)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start 3.548408 ${flipN(flip, 6.769408)}) (end 3.548408 ${flipN(flip, 8.369608)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start 3.929408 ${flipN(flip, 6.388408)}) (end 5.580408 ${flipN(flip, 6.388408)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start 4.234208 ${flipN(flip, 9.055408)}) (end 5.275608 ${flipN(flip, 9.055408)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start 5.961408 ${flipN(flip, 6.769408)}) (end 5.961408 ${flipN(flip, 8.369608)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start -4.699 ${flipN(flip, -0.7488)}) (mid -4.095402 ${flipN(flip, -0.666688)}) (end -4.013137 ${flipN(flip, -0.063111)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start -4.0132 ${flipN(flip, -2.476)}) (mid -4.095312 ${flipN(flip, -1.872402)}) (end -4.698889 ${flipN(flip, -1.790137)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start -2.413 ${flipN(flip, -2.476)}) (mid -2.143592 ${flipN(flip, -2.364407)}) (end -2.032 ${flipN(flip, -2.094998)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start -2.032 ${flipN(flip, -0.444)}) (mid -2.143593 ${flipN(flip, -0.174592)}) (end -2.413002 ${flipN(flip, -0.063)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start -1.524 ${flipN(flip, -6.4638)}) (mid -0.920405 ${flipN(flip, -6.381691)}) (end -0.838133 ${flipN(flip, -5.778118)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start -0.8382 ${flipN(flip, -8.826)}) (mid -0.920309 ${flipN(flip, -8.222405)}) (end -1.523882 ${flipN(flip, -8.140133)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start 0.8382 ${flipN(flip, -5.778)}) (mid 0.920405 ${flipN(flip, -6.381522)}) (end 1.523933 ${flipN(flip, -6.463681)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start 1.524 ${flipN(flip, -8.1402)}) (mid 0.920405 ${flipN(flip, -8.222308)}) (end 0.838133 ${flipN(flip, -8.825881)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start 3.548408 ${flipN(flip, 6.769392)}) (mid 3.660009 ${flipN(flip, 6.499987)}) (end 3.929424 ${flipN(flip, 6.388408)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start 3.548408 ${flipN(flip, 8.369608)}) (mid 4.152091 ${flipN(flip, 8.451796)}) (end 4.234301 ${flipN(flip, 9.055476)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start 5.275608 ${flipN(flip, 9.055408)}) (mid 5.35788 ${flipN(flip, 8.451784)}) (end 5.961527 ${flipN(flip, 8.369675)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start 5.580408 ${flipN(flip, 6.388408)}) (mid 5.849808 ${flipN(flip, 6.500004)}) (end 5.961392 ${flipN(flip, 6.769408)}) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") )`);

// Drawings on Dwgs.User
fp.push(`(fp_rect (start -8.89 ${flipN(flip, 10.5)}) (end 8.89 ${flipN(flip, -10.5)}) (stroke (width 0.12) (type solid)) (fill no) (layer "Dwgs.User") )`);
fp.push(`(fp_rect (start -5.285811 ${flipN(flip, -6.785813)}) (end -3.507811 ${flipN(flip, -4.118813)}) (stroke (width 0.12) (type solid)) (fill no) (layer "Dwgs.User") )`);
fp.push(`(fp_rect (start -3.507811 ${flipN(flip, -8.182813)}) (end -5.285811 ${flipN(flip, -10.849813)}) (stroke (width 0.12) (type solid)) (fill no) (layer "Dwgs.User") )`);
fp.push(`(fp_rect (start 3.350197 ${flipN(flip, -10.849813)}) (end 5.128197 ${flipN(flip, -8.182813)}) (stroke (width 0.12) (type solid)) (fill no) (layer "Dwgs.User") )`);
fp.push(`(fp_rect (start 3.350197 ${flipN(flip, -6.785813)}) (end 5.128197 ${flipN(flip, -4.118813)}) (stroke (width 0.12) (type solid)) (fill no) (layer "Dwgs.User") )`);

// Properties
// fp.push(`(property "Reference" "MCU1" (at -19.3989 ${flipN(flip, -11.28268)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 0.889 0.889) (thickness 0.1016)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "xiao-ble" (at -19.8434 ${flipN(flip, -0.29718)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 0.6096 0.6096) (thickness 0.0762)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}
function normalizeAngle(angle) {
  angle = angle % 360;
  if (angle <= -180) angle += 360;
  else if (angle > 180) angle -= 360;
  return angle;
}
function flipR(flip, r) { return normalizeAngle(flip ? (180 - r) : r) }
function flipN(flip, n) { return flip ? -n : n }

