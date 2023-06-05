<template>
    <div>
      <div class="color-picker">
        <label for="colorPicker">Choose a color for drawing: </label>
        <input type="color" id="colorPicker" v-model="color" />
  
        <div class="button-save">
          <button @click="saveToFile">Save</button>
        </div>
        <div class="button-shapes">
          <button @click="selectShape('circle')">Draw Circles</button>
          <button @click="selectShape('rectangle')">Draw Rectangles</button>
        </div>
      </div>
  
      <div class="svg-draw">
        <svg
          :width="width"
          :height="height"
          @mousedown="startDrawing"
          @mousemove="draw"
          @mouseup="endDrawing"
          @mouseleave="endDrawing"
          @touchstart="startDrawing"
          @touchmove="draw"
          @touchend="endDrawing"
          xmlns="http://www.w3.org/2000/svg"
          ref="svgContainer"
        >
          <path
            v-for="(path, index) in paths"
            :key="index"
            :d="path.d"
            :stroke="path.color"
            fill="none"
          />
          <circle
            v-for="(circle, index) in circles"
            :key="index"
            :cx="circle.cx"
            :cy="circle.cy"
            :r="circle.r"
            :fill="circle.color"
          />
          <rect
            v-for="(rectangle, index) in rectangles"
            :key="index"
            :x="rectangle.x"
            :y="rectangle.y"
            :width="rectangle.width"
            :height="rectangle.height"
            :fill="rectangle.color"
          />
        </svg>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drawing: false,
        paths: [],
        circles: [],
        rectangles: [],
        currentPath: '',
        width: 0,
        height: 0,
        color: '#000000',
        shape: 'circle',
        shapeSize: 10
      };
    },
    mounted() {
      this.width = window.innerWidth - 270; // Учесть ширину navBar
      this.height = window.innerHeight - 300;
    },
    methods: {
      startDrawing(event) {
        this.drawing = true;
        let clientX, clientY;
        if (event.type === 'touchstart') {
          clientX = event.touches[0].clientX;
          clientY = event.touches[0].clientY;
        } else {
          clientX = event.clientX;
          clientY = event.clientY;
        }
        if (this.shape === 'circle') {
          this.circles.push({
            cx: clientX - this.$refs.svgContainer.getBoundingClientRect().left,
            cy: clientY - this.$refs.svgContainer.getBoundingClientRect().top,
            r: this.shapeSize,
            color: this.color
          });
        } else if (this.shape === 'rectangle') {
          this.rectangles.push({
            x: clientX - this.$refs.svgContainer.getBoundingClientRect().left,
            y: clientY - this.$refs.svgContainer.getBoundingClientRect().top,
            width: this.shapeSize,
            height: this.shapeSize,
            color: this.color
          });
        }
      },
      draw(event) {
        if (!this.drawing) return;
        let clientX, clientY;
        if (event.type === 'touchmove') {
          clientX = event.touches[0].clientX;
          clientY = event.touches[0].clientY;
        } else {
          clientX = event.clientX;
          clientY = event.clientY;
        }
        if (this.shape === 'circle') {
          const dx = clientX - this.$refs.svgContainer.getBoundingClientRect().left - this.circles[this.circles.length - 1].cx;
          const dy = clientY - this.$refs.svgContainer.getBoundingClientRect().top - this.circles[this.circles.length - 1].cy;
          const distance = Math.sqrt(dx * dx + dy * dy);
          this.$set(this.circles, this.circles.length - 1, {
            cx: this.circles[this.circles.length - 1].cx,
            cy: this.circles[this.circles.length - 1].cy,
            r: distance,
            color: this.color
          });
        } else if (this.shape === 'rectangle') {
          const dx = clientX - this.$refs.svgContainer.getBoundingClientRect().left - this.rectangles[this.rectangles.length - 1].x;
          const dy = clientY - this.$refs.svgContainer.getBoundingClientRect().top - this.rectangles[this.rectangles.length - 1].y;
          const distance = Math.max(Math.abs(dx), Math.abs(dy));
          this.$set(this.rectangles, this.rectangles.length - 1, {
            x: this.rectangles[this.rectangles.length - 1].x,
            y: this.rectangles[this.rectangles.length - 1].y,
            width: distance,
            height: distance,
            color: this.color
          });
        }
      },
      endDrawing() {
        if (this.drawing) {
          this.drawing = false;
        }
      },
      saveToFile() {
        const svgContent = this.$refs.svgContainer.outerHTML;
        const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
  
        const link = document.createElement('a');
        link.href = url;
        link.download = 'drawing.svg';
        link.click();
  
        URL.revokeObjectURL(url);
      },
      selectShape(shape) {
        this.shape = shape;
        this.shapeSize = 10; // Сбросить размер фигуры при выборе формы
      }
    }
  };
  </script>
  
  <style scoped>
  .svg-container {
    background: #f0f0f0;
  }
  
  .color-picker {
    background-color: rgb(215, 214, 214);
    border: 2px solid black;
    margin: 20px;
    padding: 20px;
    width: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  
  .button-save {
    margin-top: 20px;
  }
  
  .button-shapes {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  
  .svg-draw {
    margin: 8px;
    border: 2px solid black;
  }
  </style>
  