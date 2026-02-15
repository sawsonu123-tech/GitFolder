import numpy as np
from sklearn.linear_model import LinearRegression

# Data
X = np.array([1000,1500,2000,2500]).reshape(-1,1)
y = np.array([30,45,60,75])

model = LinearRegression()
model.fit(X,y)

m = model.coef_[0]
c = model.intercept_

print("Slope:", m)
print("Intercept:", c)

# Prediction
size = [[1800]]
price = model.predict(size)

print("Predicted Price:", price)
