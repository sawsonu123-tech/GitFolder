from sklearn.naive_bayes import GaussianNB
import numpy as np

# Sample dataset
# Cold(1=Yes,0=No), Cough(1=Yes,0=No), Age(0=Young,1=Middle,2=Old)
X = np.array([
    [1,1,2],
    [1,0,1],
    [0,1,2],
    [1,1,2],
    [0,0,0]
])

# Disease: 1=Yes, 0=No
y = np.array([1,0,1,1,0])

model = GaussianNB()
model.fit(X, y)

# New patient: Cold=Yes, Cough=Yes, Elderly
new = np.array([[1,1,2]])

prediction = model.predict(new)
prob = model.predict_proba(new)

print("Disease Prediction:", prediction)
print("Probability:", prob)
