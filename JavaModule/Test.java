 import weka.core.Instances;

import java.io.BufferedReader;
import java.io.FileReader;

import java.io.BufferedWriter;
import java.io.FileWriter;
import weka.classifiers.meta.FilteredClassifier;
import weka.classifiers.rules.JRip;
import weka.filters.unsupervised.attribute.Remove;
 
public class Test{
	public static void main(String[] args) throws Exception{
		BufferedReader reader = new BufferedReader(new FileReader("train.arff"));
		BufferedReader reader1 = new BufferedReader(new FileReader("test.arff"));
		 Instances data = new Instances(reader);
		 Instances test = new Instances(reader1);
		 reader.close();
		 reader1.close();
		 // setting class attribute
		 data.setClassIndex(data.numAttributes() - 1);
		 test.setClassIndex(test.numAttributes() - 1);
		 // filter
		 Remove rm = new Remove();
		 //rm.setAttributeIndices("1");  // remove 1st attribute
		 // classifier
		 JRip jrip = new JRip();
		 //j48.setUnpruned(true);        // using an unpruned J48
		 // meta-classifier
		 FilteredClassifier fc = new FilteredClassifier();
		 fc.setFilter(rm);
		 fc.setClassifier(jrip);
		 // train and make predictions
		 fc.buildClassifier(data);
		 int interactive=0;
		 int noninteractive=0;
		 for (int i = 0; i < test.numInstances(); i++) {
		   double pred = fc.classifyInstance(test.instance(i));
		   if (test.classAttribute().value((int) pred).equals("interactive"))
			interactive++;
		   else if (test.classAttribute().value((int) pred).equals("noninteractive"))
			noninteractive++;
		   }
		 double avginteractive = ((double)interactive/(interactive+noninteractive))*100;
		 double avgnoninteractive = 100-avginteractive;
 		 BufferedWriter writer = new BufferedWriter(new FileWriter("Reads"));
		 writer.write(avginteractive+"\n"+avgnoninteractive);
		 writer.close();
	}
}