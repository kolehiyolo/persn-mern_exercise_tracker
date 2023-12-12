import requests
 
data = {
  "username": "Rock Lee",
  "description": "Running",
  "duration": "10",
  "date": "2023-12-01",
}
 
# response = requests.post(url="http://localhost:5000/exercises/add", data=data)
response = requests.get(url="http://localhost:5000/exercises")
print(response.text)