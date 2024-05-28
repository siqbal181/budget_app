from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
  return "Hello world!"

@app.route("/budgets", methods=["GET"])
def get_budgets():
  return 'budgets'

if __name__ == "__main__":
  app.run(debug=True)