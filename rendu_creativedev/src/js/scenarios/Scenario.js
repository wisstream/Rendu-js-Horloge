import Scene from "../canvas/Scene";
import * as dat from "dat.gui";

export default class Scenario extends Scene {
  constructor(id) {
    super(id);

    // debug
    this.params = {
      "is-update": true,
      CouleurPrincipale: "#5e5566",
      CouleurSecondaire: "#e09b1b",
      ÉpaisseurCadran: 5,
      TailleCentre: 8,
      FestinaWidth: 20,
      FestinaHeight: 20,
      FestinaSpacing: 20,
      FestinaBoldness: 2.5,
      RomainWidth: 15,
      RomainHeight: 20,
      RomainBoldness: 1.5,
      TailleAiguilleSecondes: 0.6,
      ÉpaisseurAiguilleSecondes: 2,
      TailleAiguilleMinutes: 0.55,
      ÉpaisseurAiguilleMinutes: 6,
      TailleAiguilleHeures: 0.3,
      ÉpaisseurAiguilleHeures: 14,
    };
    this.debug = this.globalContext.debug;
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder(this.id);
      this.debugFolder.add(this.params, "is-update");
    }
    this.setUpGUI();

    // canvas
    this.domElement = new DomElement(id);
    this.canvas = this.domElement.instance;
    this.context = this.canvas.getContext("2d");
    this.resize();
  }

  setUpGUI() {
    // Create GUI
    const gui = new dat.GUI();

    // variables
    gui.addColor(this.params, "CouleurPrincipale");
    gui.addColor(this.params, "CouleurSecondaire");
    gui.add(this.params, "ÉpaisseurCadran", 0, 10);
    gui.add(this.params, "TailleCentre", 0, 20);
    gui.add(this.params, "FestinaWidth", 0, 50);
    gui.add(this.params, "FestinaHeight", 0, 50);
    gui.add(this.params, "FestinaSpacing", 0, 50);
    gui.add(this.params, "FestinaBoldness", 0, 10);
    gui.add(this.params, "RomainWidth", 0, 50);
    gui.add(this.params, "RomainHeight", 0, 50);
    gui.add(this.params, "RomainBoldness", 0, 10);
    gui.add(this.params, "TailleAiguilleSecondes", 0, 1);
    gui.add(this.params, "ÉpaisseurAiguilleSecondes", 0, 20);
    gui.add(this.params, "TailleAiguilleMinutes", 0, 1);
    gui.add(this.params, "ÉpaisseurAiguilleMinutes", 0, 20);
    gui.add(this.params, "TailleAiguilleHeures", 0, 1);
    gui.add(this.params, "ÉpaisseurAiguilleHeures", 0, 20);

    gui.open();
  }

  update() {
    if (!super.update()) return;
    this.drawUpdate();
  }

  // Function to draw romain letter I V and X
  drawi(x, y, height) {
    this.context.beginPath();
    this.context.lineWidth = this.params.RomainBoldness;
    this.context.moveTo(x, y - height / 2);
    this.context.lineTo(x, y + height / 2);
    this.context.stroke();
  }

  drawV(x, y, height, width) {
    this.context.beginPath();
    this.context.moveTo(x - width / 2, y - height / 2);
    this.context.lineTo(x, y + height / 2);
    this.context.lineTo(x + width / 2, y - height / 2);
    this.context.stroke();
  }

  drawX(x, y, height, width) {
    this.context.beginPath();
    this.context.moveTo(x - width / 2, y - height / 2);
    this.context.lineTo(x + width / 2, y + height / 2);
    this.context.moveTo(x + width / 2, y - height / 2);
    this.context.lineTo(x - width / 2, y + height / 2);
    this.context.stroke();
  }

  // Function to draw letters R O L E and X
  drawF(x, y, height, width) {
    this.context.beginPath();
    this.context.moveTo(x - width / 2, y - height / 2);
    this.context.lineTo(x + width / 2, y - height / 2);
    this.context.moveTo(x - width / 2, y);
    this.context.lineTo(x + width / 2, y);
    this.context.moveTo(x - width / 2, y + height / 2);
    this.context.moveTo(x - width / 2, y - height / 2);
    this.context.lineTo(x - width / 2, y + height / 2);
    this.context.stroke();
  }
  drawE(x, y, height, width) {
    this.context.beginPath();
    this.context.moveTo(x - width / 2, y - height / 2);
    this.context.lineTo(x + width / 2, y - height / 2);
    this.context.moveTo(x - width / 2, y);
    this.context.lineTo(x + width / 2, y);
    this.context.moveTo(x - width / 2, y + height / 2);
    this.context.lineTo(x + width / 2, y + height / 2);
    this.context.moveTo(x - width / 2, y - height / 2);
    this.context.lineTo(x - width / 2, y + height / 2);
    this.context.stroke();
  }
  drawS(x, y, height, width) {
    this.context.beginPath();
    this.context.moveTo(x - width / 2, y - height / 2);
    this.context.lineTo(x + width / 2, y - height / 2);
    this.context.moveTo(x - width / 2, y);
    this.context.lineTo(x + width / 2, y);
    this.context.moveTo(x - width / 2, y + height / 2);
    this.context.lineTo(x + width / 2, y + height / 2);
    this.context.moveTo(x - width / 2, y - height / 2);
    this.context.lineTo(x - width / 2, y);
    this.context.moveTo(x + width / 2, y);
    this.context.lineTo(x + width / 2, y + height / 2);
    this.context.stroke();
  }
  drawT(x, y, height, width) {
    this.context.beginPath();
    this.context.moveTo(x - width / 2, y - height / 2);
    this.context.lineTo(x + width / 2, y - height / 2);
    this.context.moveTo(x, y - height / 2)
    this.context.lineTo(x, y + height / 2);
    this.context.stroke();
  }
  drawI(x, y, height, width) {
    this.context.beginPath();
    this.context.moveTo(x, y + height / 2);
    this.context.lineTo(x, y - height / 2);
    this.context.stroke();
  }
  drawN(x, y, height, width) {
    this.context.beginPath();
    this.context.moveTo(x - width / 2, y - height / 2);
    this.context.lineTo(x + width / 2, y + height / 2);
    this.context.moveTo(x - width / 2, y - height / 2);
    this.context.lineTo(x - width / 2, y + height / 2);
    this.context.moveTo(x + width / 2, y - height / 2);
    this.context.lineTo(x + width / 2, y + height / 2);
    this.context.stroke();
  }
  drawA(x, y, height, width) {
    this.context.beginPath();
    this.context.moveTo(x + width / 1000, y - height / 2);
    this.context.lineTo(x - width / 2, y + height / 2);
    this.context.moveTo(x + width / 1000, y - height / 2);
    this.context.lineTo(x + width / 2, y + height / 2);
    this.context.moveTo(x - width / 4, y);
    this.context.lineTo(x + width / 4, y);
    this.context.stroke();
  }

  drawUpdate() {
    this.clear();

    // Draw background
    this.context.beginPath();
    this.context.arc(
      this.width / 2,
      this.height / 2,
      this.width / 2,
      0,
      2 * Math.PI
    );
    this.context.fillStyle = this.params.CouleurPrincipale;
    this.context.fill();
    // Draw frame of the watch
    this.context.strokeStyle = this.params.CouleurSecondaire;
    this.context.lineWidth = this.params.ÉpaisseurCadran;
    this.context.stroke();
    // Draw notches on the frame
    let notchLength = this.params.notchLength;
    let notchWidth = this.params.notchWidth;
    this.context.lineWidth = notchWidth;
    for (let i = 0; i < 60; i++) {
      let angle = (i / 60) * (2 * Math.PI);
      let innerRadius = this.width / 2 - notchLength;
      let outerRadius = this.width / 2;
      let innerX = this.width / 2 + innerRadius * Math.cos(angle);
      let innerY = this.height / 2 + innerRadius * Math.sin(angle);
      let outerX = this.width / 2 + outerRadius * Math.cos(angle);
      let outerY = this.height / 2 + outerRadius * Math.sin(angle);
      this.context.beginPath();
      this.context.moveTo(innerX, innerY);
      this.context.lineTo(outerX, outerY);
      this.context.stroke();
    }
    // Draw the center of the frame
    this.context.beginPath();
    this.context.arc(
      this.width / 2,
      this.height / 2,
      this.params.TailleCentre,
      0,
      2 * Math.PI
    );
    this.context.fillStyle = this.params.CouleurSecondaire;
    this.context.fill();
    this.context.stroke();

    // Get the current time
    let now = new Date();
    let second = now.getSeconds();
    let minute = now.getMinutes();
    let hour = now.getHours();

    // Convert hour from 24h to 12h
    hour = hour % 12;

    let secondAngle = (second / 60) * (2 * Math.PI);
    let minuteAngle = ((minute + second / 60) / 60) * (2 * Math.PI);
    let hourAngle = ((hour + minute / 60) / 12) * (2 * Math.PI);

    // Draw needles
    this.drawHand(
      secondAngle,
      this.params.TailleAiguilleSecondes,
      this.params.ÉpaisseurAiguilleSecondes,
      this.params.CouleurSecondaire
    );
    this.drawHand(
      minuteAngle,
      this.params.TailleAiguilleMinutes,
      this.params.ÉpaisseurAiguilleMinutes,
      this.params.CouleurSecondaire
    );
    this.drawHand(
      hourAngle,
      this.params.TailleAiguilleHeures,
      this.params.ÉpaisseurAiguilleHeures,
      this.params.CouleurSecondaire
    );

    // Draw the numeral Romain letters
    let RomainLetters = [
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
      "X",
      "XI",
      "XII",
      "I",
      "II",
    ];
    this.context.strokeStyle = this.params.CouleurSecondaire;
    let numeralHeight = this.params.RomainHeight;
    let numeralWidth = this.params.RomainWidth;
    for (let i = 0; i < 12; i++) {
      let angle = (i / 12) * (2 * Math.PI);
      let radius = (0.8 * Math.min(this.width, this.height)) / 2;
      let x = this.width / 2 + radius * Math.cos(angle);
      let y = this.height / 2 + radius * Math.sin(angle);
      let numeral = RomainLetters[i];
      for (let j = 0; j < numeral.length; j++) {
        switch (numeral[j]) {
          case "I":
            this.drawi(x + j * numeralWidth, y, numeralHeight);
            break;
          case "V":
            this.drawV(x + j * numeralWidth, y, numeralHeight, numeralWidth);
            break;
          case "X":
            this.drawX(x + j * numeralWidth, y, numeralHeight, numeralWidth);
            break;
        }
      }
    }

    // Draw the word "Festina"
    let letters = ["F", "E", "S", "T", "I", "N", "A"];
    let letterWidth = this.params.FestinaWidth;
    let letterSpacing = this.params.FestinaSpacing;
    let letterHeight = this.params.FestinaHeight;
    let startX =
      this.width / 2 -
      (letters.length * (letterWidth + letterSpacing)) / 2 +
      letterWidth;
    let y = this.height /8 - letterHeight;
    this.context.strokeStyle = this.params.CouleurSecondaire;
    this.context.lineWidth = this.params.FestinaBoldness;
    for (let i = 0; i < letters.length; i++) {
      let x = startX + i * (letterWidth + letterSpacing);
      switch (letters[i]) {
        case "F":
          this.drawF(x, y, letterHeight, letterWidth);
          break;
        case "E":
          this.drawE(x, y, letterHeight, letterWidth);
          break;
        case "S":
          this.drawS(x, y, letterHeight, letterWidth);
          break;
        case "T":
          this.drawT(x, y, letterHeight, letterWidth);
          break;
        case "I":
          this.drawI(x, y, letterHeight, letterWidth);
          break;
        case "N":
          this.drawN(x, y, letterHeight, letterWidth);
          break;
        case "A":
          this.drawA(x, y, letterHeight, letterWidth);
          break;

      }
    }
  }

  drawHand(angle, length, width, color) {
    let x = this.width / 2;
    let y = this.height / 2;
    let endX = x + ((length * this.width) / 2) * Math.cos(angle - Math.PI / 2);
    let endY = y + ((length * this.height) / 2) * Math.sin(angle - Math.PI / 2);

    this.context.beginPath();
    this.context.lineWidth = width;
    this.context.strokeStyle = color;
    this.context.moveTo(x, y);
    this.context.lineTo(endX, endY);
    this.context.stroke();
  }
}
