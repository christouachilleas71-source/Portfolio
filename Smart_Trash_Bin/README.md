# Smart Powered Trash Bin 🤖♻️

---

The smart trash bin works by first detecting a hand in front of the sensor. Then the system works by clicking 1 out of 4 buttons (red for general waste, blue for plastic, yellow for glass and black for aluminium) and the plate rotates based on the input of the buttons to the right compartment. The Kypruino board commands a servo motor attached to the lid to open it automatically, while simultaneously updating a 0.91″ OLED screen connected to the board to display the detected material. The waste falls onto a rotating plate, which turns toward the correct compartment. There are four subdivided bins inside the main container (Glass, Paper, PVC, General Waste). The plate lowers, drops the waste into the selected bin, and returns to its original position. A companion app shows the fill percentage of each bin and sends a notification when they are full and need emptying.

---

## 🔧 Key Features
- Motion detection and automatic lid operation
- Material selection and sorting logic via buttons
- Microcontroller control
- Modular and Futuristic

---  

## 🛠 Technologies Used
- Microcontroller: Kypruino / Arduino
- Programming Languages: C++
- Hardware: Ultrasonic sensor, servo motor, OLED display, buttons
- Other Tools: Companion mobile app for bin monitoring

---

## 🎯 Objective
Make the world a more enviromentally friendly place for all of us and reduce global waste ♻️

---

## 📁 Structure
- `/code` → https://github.com/achilleaschristou/Tech_Portfolio/blob/main/Smart_Trash_Bin/Code.txt

---

## 🚀 Notes

Created as an independent engineering project, it seeks to solve problems, improve efficiency, and implement smart automation.
