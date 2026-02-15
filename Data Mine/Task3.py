import pandas as pd
from mlxtend.frequent_patterns import apriori, association_rules

# Transaction data
data = {
    'Bread':[1,1,1,1,1],
    'Butter':[1,0,1,1,0],
    'Beer':[0,1,1,0,1],
    'Eggs':[0,1,0,0,1],
    'FruitJuice':[1,0,1,0,1]
}

df = pd.DataFrame(data)

# Frequent itemsets
freq = apriori(df, min_support=0.4, use_colnames=True)

print("Frequent Itemsets:")
print(freq)

# Rules
rules = association_rules(freq, metric="confidence", min_threshold=0.6)

print("Association Rules:")
print(rules)
