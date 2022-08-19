# helpers.py
# Abstration from app.py
import re

def psw_can_be_processed(psw: str):
    # anything between 9 and 256 times, any number at least 1 times
    result = re.search(r".{9,256}[0-9]{1,}", psw)
    if not result:
        # Incorrect passsword, false
        return False
    # Correct password, true
    return True


def apology(apology: str):
    # return error apology to user
    return f"error: + {apology}"
