from flask import Flask, render_template, request, flash
import sqlite3 as sql
import os
import sys

app = Flask(__name__)
app.secret_key = 'development key'

@app.route('/')
def home():
    con = sql.connect("database.db")
    con.row_factory = sql.Row

    cur = con.cursor()
    cur.execute("select * from my_images")

    rows = cur.fetchall()
    return render_template("index.html", rows = rows)

@app.route('/MyHedgehogs')
def myHedgehogs():
    return render_template("myhedgehogs.html")

@app.route('/WatchMeGrow')
def meGrowing():
    return render_template("megrowing.html")

@app.route('/ForSale')
def forSale():
    return render_template("forsale.html")

@app.route('/Sold')
def sold():
    return render_template("sold.html")

@app.route('/Care')
def care():
    return render_template("care.html")

@app.route('/Q&A')
def questionsAndAnswers():
    return render_template("questionsandanswers.html")

@app.route('/FunFacts')
def funFacts():
    return render_template("funfacts.html")

@app.route('/Contact')
def contact():
    return render_template("contact.html")

@app.route('/Reviews')
def reviews():
    return render_template("reviews.html")

class Image(object):

    def __init__(self):
        self.image_name = []

    imgPath = os.getcwd()
    imgPath = imgPath.replace("\\", "/")
    def load_directory(self, path=imgPath):
        """
        :param path: Provide Path of File Directory
        :return: List of image Names
        """
        for x in os.listdir(path):
            self.image_name.append(x)

        return self.image_name

    def create_database(self, name, image):
        """
        :param name: String
        :param image:  BLOP Data
        :return: None
        """

        conn = sql.connect("database.db")
        cursor = conn.cursor()

        cursor.execute("""
        CREATE TABLE IF NOT EXISTS my_images 
        (name TEXT,image BLOP)""")

        cursor.execute(""" INSERT INTO my_images 
        (name, image) VALUES (?,?)""",(name,image))

        conn.commit()
        cursor.close()
        conn.close()

def fetch_data():
    counter = 1
    imgPath = os.getcwd()
    imgPath = imgPath.replace("\\", "/")
    os.chdir(imgPath)
    conn = sql.connect("database.db")
    cursor = conn.cursor()

    data = cursor.execute("""SELECT * FROM my_images""")
    for x in data.fetchall():
        with open("{}.png".format(counter),"wb") as f:
            f.write(x[1])
            counter= counter + 1


    conn.commit()
    cursor.close()
    conn.close()

if __name__=='__main__':
    obj = Image()
    imgPath = os.getcwd() + "\\static\\images"
    imgPath = imgPath.replace("\\", "/")
    try:
        os.chdir(imgPath)
    except:
        os.chdir(os.getcwd())
    for x in obj.load_directory():
        try:
            if ".png" in x:
                with open(x, "rb") as f:
                    data = f.read()
                    obj.create_database(name=x, image=data)
                    print("{} Added to database ".format(x))


            elif ".jpg" in x:
                with open(x, "rb") as f:
                    data = f.read()
                    obj.create_database(name=x, image=data)
                    print("{} added to Database".format(x))
        except:
            print("{} Not added to database ".format(x))

    app.run(debug=True)