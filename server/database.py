import sqlite3

def db_connect():
    db = sqlite3.connect('./strong-dict.db')
    cursor = db.cursor()
    return db, cursor


def suggestions(value):
    db, cursor = db_connect()

    cursor.execute(f"SELECT * FROM strong_dictionary WHERE latin_alpha LIKE '%{value}%' ORDER BY length LIMIT 10")
    data = cursor.fetchall()
    db.commit()

    cursor.execute(f"SELECT COUNT(*) FROM strong_dictionary WHERE latin_alpha LIKE '%{value}%'")
    count = cursor.fetchone()
    db.commit()

    db.close()

    return data, count


def word_info(id):
    db, cursor = db_connect()

    cursor.execute(f"SELECT * FROM strong_dictionary WHERE id LIKE {id}")
    row = cursor.fetchone()

    db.commit()
    db.close()
    return row.id
