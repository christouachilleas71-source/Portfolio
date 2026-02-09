# Smart Powered Trash Bin 🤖♻️

The smart trash bin works by first detecting a hand in front of the sensor. Then the laptop’s built-in camera identifies the material of the waste with the help of an app called Pictoblox that it's trained to recognise from which material the rubbish is made out of (ML Training Environment). The Kypruino board commands a servo motor attached to the lid to open it automatically, while simultaneously updating a 0.91″ OLED screen connected to the board to display the detected material. The waste falls onto a rotating plate, which turns toward the correct compartment. There are four subdivided bins inside the main container (Glass, Paper, PVC, General Waste). The plate lowers, drops the waste into the selected bin, and returns to its original position. A companion app shows the fill percentage of each bin and sends a notification when they are full and need emptying.

This project combines, automation and C++ programming. 

## 🔧 Key Features
- Motion detection and automatic lid operation
- Material recognition and sorting logic
- Microcontroller control
- Modular and Futuristic

## 🛠 Technologies
Arduino, C++, sensors, motors

## 🎯 Objective
Make the world a more enviromentally friendly place for all of us and reduce global waste ♻️

## 📁 Structure
- `/code` → https://github.com/achilleaschristou/Portfolio/blob/main/Smart_Trash_Bin/Code.txt

---

Created as an independent engineering project, it seeks to solve problems, improve efficiency, and implement smart automation.
