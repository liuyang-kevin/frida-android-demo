# 简单Android逆向随笔

## 工具：
1. frida
2. root的android设备
3. Frida下载安卓设备对应的 frida-server
4. android studio，sdk，套装（搞安卓必备了）

## 步骤：
1. root Android，ADB push frida-server 到可执行目录，授予frida-server可执行权限
    1. ADB shell 进入设备 启动 frida-server
2. 启动目标App，
    1. 看文章与人家的dome，用包名hook的进程，但是我这没成功
    2. 我用 ps -A | grep "me.shing" 查找了PID，hook上了
3. python执行py脚本，启动frida工具，hook到App，
    1. 就是个hook进程、注入脚本到Android设备的过程

## 原理与要点：
* 本质就是gdb attach进程，
* js脚本是注入到目标的，虽然是js，但是操作的是目标的vm对象
    * 新建值，赋值，应当用注入写法，实例vm的正确对象
    * hook对应方法，如xxxx，尤其生命周期应该this.xxxx()保证其正常执行
    * 取值需要用.value写法，才能真正取到值

剩下就该正经看文档了。。。我就了解到这就行了

## 继续深入
需要各种反编译工具，脱壳，dex文件导出，ida搞到标识符等等操作。然后实现对应的js注入脚本
