from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/serve/<usuario>", methods = ["GET"])
def hello(usuario):
    return jsonify(usuario), 200

@app.route("/serve", methods = ["POST"])
def inserir_mvno():
    dicio = request.json
    return jsonify(dicio), 200


@app.route("/treinador/<nome>", methods = ["PUT"])
def cadastrar_treinador(nome):
    mvnos.append(nome)
    return jsonify(mvnos), 202


@app.route("/treinador/<nome>", methods = ["DELETE"])
def excluir_treinador(nome):
    if nome not in treinadores: return "", 404
    del treinadores[nome]
    return "", 204

if __name__ == "__main__":
    app.run(port = 9000, debug = True)