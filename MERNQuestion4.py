import pymongo

my_client = pymongo.MongoClient("mongodb://localhost:27017/")
my_db = my_client["Persons_data"]
my_col = my_db["person"]

my_obj = {"name" : "Raghu veer", "email" : "rv@rest.com", "age": 89}

x = my_col.insert_one(my_obj)
