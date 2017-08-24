from types import *

class chatbot(object):

    first_question = "Hello. My name is Chris, your HR bot."

    def __init__(self, text):
        self.text = text

    def input_questions(self):
        questions = []
        maxlength = 0
        i = 0

        while True:
            try:
                maxlength = int(raw_input("How many questions do you want to ask? "))
            except ValueError:
                print "You must type a number."
            else:
                break
        for i in xrange(maxlength):
            q = raw_input("Enter a question: ")
            questions.append(q)
        print questions
        confirm(prompt=None, resp=False)

def confirm(prompt=None, resp=False):
    if prompt is None:
        prompt = 'Are these correct?'
    if resp:
        prompt = '%s [%s]|%s: ' % (prompt, 'y', 'n')
    else:
        prompt = '%s [%s]|%s: ' % (prompt, 'n', 'y')
    while True:
        ans = raw_input(prompt)
        if not ans:
            return resp
        if ans not in ['y', 'Y', 'n', 'N']:
            print 'please enter y or n.'
            continue
        if ans == 'y' or ans == 'Y':
            return True
        if ans == 'n' or ans == 'N':
            return False




Chris = chatbot('greeting')
print Chris.first_question

Chris.input_questions()



