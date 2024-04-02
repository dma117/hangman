export class Hangman {
  constructor() {
    this.ctx = document.getElementById("canvas").getContext("2d");
    this.currentPart = 0;
    this.parts = [
      () => this.drawHead(),
      () => this.drawBody(),
      () => this.drawLeftHand(),
      () => this.drawRightHand(),
      () => this.drawLeftLeg(),
      () => this.drawRightLeg(),
    ];
  }

  setNewGame() {
    this.ctx = document.getElementById("canvas").getContext("2d");
    this.currentPart = 0;
  }

  drawPart() {
    this.parts[this.currentPart]();
    this.currentPart += 1;
  }

  drawGallows() {
    const img = new Image();
    img.onload = () => {
      this.ctx.drawImage(img, 0, 0);
    };
    img.src = "./assets/images/gallows.png";
  }
  
  drawHead() {
    this.ctx.beginPath();
    this.ctx.arc(300, 190, 34, 0, Math.PI * 2, true);
    this.ctx.fill();
  }
  
  drawBody() {
    this.ctx.fillRect(300, 224, 5, 131);
  }
  
  drawLeftHand() {
    this.ctx.beginPath();
    this.ctx.moveTo(232, 305);
    this.ctx.lineTo(300, 224);
    this.ctx.lineTo(300, 230);
    this.ctx.lineTo(235, 308);
    this.ctx.lineTo(232, 305);
    this.ctx.fill();
  }
  
  drawRightHand() {
    this.ctx.beginPath();
    this.ctx.moveTo(367, 305);
    this.ctx.lineTo(305, 224);
    this.ctx.lineTo(305, 230);
    this.ctx.lineTo(363, 308);
    this.ctx.lineTo(367, 305);
    this.ctx.fill();
  }
  
  drawLeftLeg() {
    const width = 7;
    const bodyLength = 131;
    const margin = bodyLength - width;
    this.ctx.beginPath();
    this.ctx.moveTo(232, 305 + margin);
    this.ctx.lineTo(300, 224 + margin);
    this.ctx.lineTo(300, 230 + margin);
    this.ctx.lineTo(235, 308 + margin);
    this.ctx.lineTo(232, 305 + margin);
    this.ctx.fill();
  }
  
  
  drawRightLeg() {
    const width = 7;
    const bodyLength = 131;
    const margin = bodyLength - width;
    this.ctx.beginPath();
    this.ctx.moveTo(367, 305 + margin);
    this.ctx.lineTo(305, 224 + margin);
    this.ctx.lineTo(305, 230 + margin);
    this.ctx.lineTo(363, 308 + margin);
    this.ctx.lineTo(367, 305 + margin);
    this.ctx.fill();
  }
}