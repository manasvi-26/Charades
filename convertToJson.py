import json
import csv
import os
import openai

import time


openai.api_key = "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"


def get_gpt(prompt):

    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        max_tokens=709,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    
    return response.choices[0].text

data = {}
strat = {}


with open('database.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    for row in csv_reader:
        word = row[0]
        word = word.lower()

        print(word)
        
        if word not in data.keys():
            data[word] = {}

            data[word]["POS"] = row[1]
            prompt = "how to represent " + word + " using hands"
            response = get_gpt(prompt)
            data[word]["GPT::" + prompt] = response

            prompt = "how to represent " + word + " using human body"
            response = get_gpt(prompt)
            data[word]["GPT::" + prompt] = response

            prompt = "how to represent " + word + " using gestures"
            response = get_gpt(prompt)
            data[word]["GPT::" + prompt] = response

            strat[word] = 1
            time.sleep(7)

        
        word_cnt = strat[word]
        strategy = "strategy " + str(word_cnt)

        data[word][strategy] = {}
        data[word][strategy]['Action Name'] = row[2]
        data[word][strategy]['Ortega Taxonomy Class'] = row[3]
        files = os.listdir(path="/home/manasvi/Computer_Vision/Honors-3/Charades/my-app/public/metaphorics-videos/" + word)
        files.sort()

        data[word][strategy]['video'] = "/metaphorics-videos/" + word + "/" + files[word_cnt - 1]
        strat[word] +=1 

        with open("charades.json", "w") as write_file:
            json.dump(data, write_file, indent=4, sort_keys=True)




