#Installing pyserial on rasberry pi to comunicate with arduino:
- Download the archive from http://pypi.python.org/pypi/pyserial.
- Unpack the archive.  
- Enter the directory from terminal and run: $python setup.py install


#Installing couchdb on rasberry pi:
- Download the archive from https://pypi.python.org/pypi/CouchDB/1.0
- Unpack the archive.  
- Enter the directory from terminal and run: $python setup.py install


#Installing node.js and npm on rasberry pi:
- run:
	$curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
	$sudo apt-get install -y nodejs
	$sudo apt-get install -y build-essential

#Installing infinite loop on rasberry pi:
	$npm install infinite-loop

#Installing Mosquitto on rasberry pi:
- import the repository package signing key by commands:
	$sudo wget http://repo.mosquitto.org/debian/mosquitto-repo.gpg.key
	$sudo apt-key add mosquitto-repo.gpg.key
- make the repository available to apt:
	$cd /etc/apt/sources.list.d/
	$sudo wget http://repo.mosquitto.org/debian/mosquitto-wheezy.list
- update apt information:
	$apt-get update
- install Mosquitto and Mosquitto clients:
	$sudo apt-get install mosquito

#installing java jdk on the raspberry pi for running weka:
-run:
	$sudo apt-get install oracle-java7-jdk

#installing meyda for extracting voice features using node js:
-run:
	$ npm install meyda
