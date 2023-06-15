from flask import Flask, jsonify, request
from PIL import Image
import numpy as np
from keras.models import load_model


labels = ["Aluminium",
          "Carton",
          "Glass",
          "Organic Waste",
          "Paper and Cardboard",
          "Plastic",
          "Styrofoam",
          "Textiles"]

model = load_model('model_MobileNetV3Large.h5')


# Process image and predict label
def preprocess_image(image):
    # Resize the image to match the input size of the model
    image = image.resize((256, 256))
    # Preprocess the image (e.g., convert to numpy array, normalize, etc.)
    image = np.array(image)
    image = np.expand_dims(image, axis=0)  # Add batch dimension
    return image


# Initializing flask application
app = Flask(__name__)

@app.route("/")
def main():
    return """
        Response Successful!
    """

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image found'})

    image_file = request.files['image']
    image = Image.open(image_file)

    # Preprocess the image
    preprocessed_image = preprocess_image(image)

    # Make predictions
    predictions = model.predict(preprocessed_image)
    predicted_class = np.argmax(predictions[0])
    class_label = labels[predicted_class]
    accuracy = predictions[0][predicted_class] * 100

    response = {
        'class_label': class_label,
        'accuracy': f'{accuracy:.2f}%'
    }

    return jsonify(response)


if __name__ == "__main__":
    app.run(debug=True)
