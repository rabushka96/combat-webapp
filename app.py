from flask import Flask, render_template, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/fight', methods=['POST'])
def fight():
    from random import randint
    player_attack = randint(5, 15)
    bot_attack = randint(5, 12)
    result = {
        "player_damage": player_attack,
        "bot_damage": bot_attack,
        "winner": "player" if player_attack > bot_attack else "bot"
    }
    return result

if __name__ == '__main__':
    app.run(debug=True)
