#!/usr/bin/python
import threading
import time
import paho.mqtt.client as mqtt
import json
import random



class myThread (threading.Thread):
        def __init__(self, threadID):
                threading.Thread.__init__(self)
                self.threadID = threadID
        def run(self):
                user = self.threadID
                self.client = mqtt.Client(client_id=str(user))
                self.client.connect("broker.hivemq.com",1883)
                self.client.loop_start()
                val ={'School':'Test_School1','Location':'Test_Classroom','interactive':90,'noninteractive':10}
                val = json.dumps(val)
                self.client.publish("interactivity", str(val), 2 , False)
                time.sleep(random.randrange(1, 5))
		

threads = []
# Start new Threads
for i in range(0,500):
        thread=myThread(i)
        thread.start()
        threads.append(thread)

# Wait for all threads to complete
for t in threads:
        t.join()
print "Exiting main thread"
