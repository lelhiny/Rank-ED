#import time
#import couchdb
import serial
ser=serial.Serial('/dev/ttyUSB0',9600)
#//couch=couchdb.Server('http://localhost:5984/')
#//db=couch['sound']
line1=ser.readline()
#//line1=line.rstrip("\n")
f=open('audio','a')
f.writelines(line1)
#/doc={'value',line1};
#/db.save(doc);