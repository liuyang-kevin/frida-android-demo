import frida
import sys
import os

# adb shell dumpsys package | grep -Eo "^[[:space:]]+[0-9a-f]+[[:space:]]+com.google.android.youtube/[^[:space:]]+" | grep -oE "[^[:space:]]+$"


# ps -A | grep "me.shing" 
# packageName = "me.shingle.fridatest"
pid = 18639

def messagesCallback(message, data):
    if message['type'] == 'send':
        print(message['payload'])
    elif message['type'] == 'error':
        print(message['stack'])


hookCode = None
with open(os.path.dirname(os.path.realpath(__file__)) + '/hookTest.js') as f:
# with open(os.path.dirname(os.path.realpath(__file__)) + '/hookYouToBe.js') as f:
    hookCode = f.read()

process = frida.get_remote_device().attach(pid)
# process = frida.get_usb_device().attach(packageName)
print(process)
process.enable_debugger()
script = process.create_script(hookCode)
script.on('message', messagesCallback)
script.load()
sys.stdin.read()
