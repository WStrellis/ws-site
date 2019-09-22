import React from "react";
import Particles from "react-particles-js";
import './particle.component.module.scss'
/*
width	string	The width of the canvas.
height	string	The height of the canvas.
params	object	The parameters of the particles instance.
style	object	The style of the canvas element.
className	string	The class name of the canvas wrapper.
canvasClassName	string	the class name of the canvas.
*/
export default function ParticleField() {
  return (
      <Particles
        className='particlefield--wrapper'
        canvasClassName='particlefield--canvas'
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 150
              }
            },
            size: {
              value: 0
            },
            shape: {
              stroke: {
                width: 0
              },
              polygon: {
                polygon_nb_sides: 4
              }
            },
            line_linked: {
              distance: 150,
              color: '#7618ce',
              opacity: 1,
              width: 2
            },
            move: {
              direction: "top-right",
              speed: 1,
              out_mode: "out",
              attract: {
                enable: true,
                rotateX: 1800,
                rotateY: 1800
              }
            }
          }
        }}
      />
  );
}
