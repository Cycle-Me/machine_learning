# CycleMe
Repo for Bangkit 2023 Product-based Capstone on Machine Learning Path

## The Guideline

### Main Branch
* Build_Model: This component encompasses the development of models using various transfer learning methods. It involves creating and fine-tuning models to classify waste images effectively.
* CycleMeDataset: This dataset consists of waste images categorized into eight classes. It serves as the foundation for training and validating the models.
* CycleMeDataset_Train_Validation: This dataset is derived from the CycleMeDataset and is further divided into training and validation subsets. It ensures the availability of separate data for model training and evaluation.
* Save_Model: This component involves saving the final trained model in both h5 and JSON formats. This allows for easy storage and later retrieval of the model for future use. The final model we used is model_MobileNetV3Large.h5.

### ML-api Branch
The Ml-api comprises of prediction API functions that utilize the .py file format and are implemented using the Flask library

### Recommendation Branch
The Recommendation Branch consists of recommendation API functions implemented in the .js file format, leveraging the Express and Cors libraries

## Documentation
* Collect the dataset
* Preprocess the data using filtration of unsupported image format and delete them 
* Develop an image classification model
* Set a training and testing model
* Make a prediction function in py format 
* Make a recommendation

## Classes
There are 8 waste classes that can be predicted:
* Aluminium (aluminium)
* Carton (kotak minum)
* Glass (kaca)
* Organic waste (sampah organik)
* Paper and cardboard (kertas dan kardus)
* Plastic (plastik)
* Styrofoam (stirofom)
* Textiles (kain)
