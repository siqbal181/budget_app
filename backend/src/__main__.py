from src import create_app

if __name__ == "__main__":
  app = create_app()
  app.run(debug=True)


# run with: backend git:(main) ✗ poetry run python -m src  