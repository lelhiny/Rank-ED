import time
import serial
ser=serial.Serial('/dev/ttyUSB0',9600)
#while True:
line1=ser.readline()
f=open('audiotest','a')
f.writelines(line1)
#time.sleep(20)

