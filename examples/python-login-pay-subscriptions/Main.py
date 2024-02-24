import os, time
from flask import Flask, render_template, request, jsonify
from pi_python import PiNetwork
import subprocess
from pylocaldatabase import pylocaldatabase
dbcontroll = pylocaldatabase.databasecontroller(path="data.json", isEncrypted=False)

try:
    dbcontroll.load()
except:
    dbcontroll.makeDatabase()

subscriptions = dbcontroll.getDocument("subscriptions")
if(subscriptions == False):
    dbcontroll.insertDocument({}, "subscriptions")
    subscriptions = dbcontroll.getDocument("subscriptions")

def get_subscription(user_id):
    #subscriptions.get()
    the_sub = subscriptions.getItem(user_id)
    dbcontroll.save()
    return the_sub

def remove_subscription(user_id):
    #subscriptions.get()
    removed_sub = subscriptions.removeItem(user_id)
    dbcontroll.save()
    return removed_sub

def add_subscription(user_id, payment_id, tx_id):
    added_sub = subscriptions.insertItem(user_id, {"payment_id":payment_id,"tx_id":tx_id,'date_start':time.time()})
    dbcontroll.save()
    return added_sub

#Start ngrok for auto forwarding from local machine
#subprocess.Popen(["ngrok",'http','--domain=the.ngrok-free.app','5000'])

""" Secret Data """
api_key = "APIKEY" 
wallet_private_seed = "DEVELOPERWALLETSEED" 

pi = PiNetwork()
pi.initialize(api_key, wallet_private_seed, "Pi Testnet")

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat')
def chat():
    return render_template('chat.html')

@app.route('/check_subscription', methods=['POST'])
def check_subscription():
    request_data = request.get_json()
    userid = request_data['user_id']
    subscription = get_subscription(userid)
    if subscription:
        return jsonify({'subscribed':True})
    else:
        return jsonify({'subscribed':False})

@app.route('/cancel_payment', methods=['POST'])
def cancel_payment():
    request_data = request.get_json()
    pay_id = request_data['pay_id']
    cancelled = pi.cancel_payment(pay_id)
    print(cancelled)
    return jsonify({'payid': pay_id})

@app.route('/confirm_payment', methods=['POST'])
def confirm_payment():
    request_data = request.get_json()
    pay_id = request_data['pay_id']
    approved = pi.approve_payment(pay_id)
    print(approved)
    return jsonify({'payid': pay_id})

@app.route('/finalize_payment', methods=['POST'])
def finalize_payment():
    request_data = request.get_json()
    user_id = request_data['user_id']
    pay_id = request_data['pay_id']
    tx_id = request_data['tx_id']
    finalized = pi.complete_payment(pay_id, tx_id)
    add_subscription(user_id, pay_id, tx_id)
    print(finalized)
    return jsonify({'payid': pay_id})

@app.route('/validation-key.txt')
def validate_domain():
    return render_template('validation-key.txt')

@app.route('/get_response', methods=['POST'])
def get_response():
    request_data = request.get_json()
    print(request_data['message'])
    
    # Placeholder for AI response generation (you'll replace this)
    ai_response = "Hello! How can I help you?" 
    return jsonify({'message': ai_response})

if __name__ == '__main__':
    app.run(debug=True)
