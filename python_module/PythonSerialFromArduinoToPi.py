import time
import couchdb
import serial
ser=serial.Serial('/dev/ttyUSB0',9600)
couch=couchdb.Server('http://localhost:5984/')
db=couch['rank_ed']
while 1:
        line=ser.readline()
        line1=line.rstrip("\n")
        arr=line1.split(";")
        school,room,key,value=arr
        if key == "temp":
                doc=db[db[school+room].id]
                doc['SenseTopic']=key
                doc['School']=school
                doc['Location']=room
                doc['time']=time.strftime("%Y%d%m%H%M%S")
                doc['Value']=0
                doc['Average']=value
                doc['Display']='Bar'
                doc['Privacy']='School'
                doc['Unit']='C'
                db[db[school+room].id]=doc