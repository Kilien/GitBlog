---
title: "Python技巧"
date: 2020-10-09T11:06:17+08:00
draft: false
tags: ["Python","Trick"]
categories: ["Python"]
---

# Python技巧
### 原地交换两数
```python 
a = 10 
b = 20 
a, b = b, a 
print(b, a) 
print(a, b)
```

输出:
```
10 20 
20 10
```

### 链式比较
```python
n = 10 
print(6 < n < 20) 
print(11 < n < 20)
```

输出:
```
True 
False
```


### 三元组操作
#### [表达式为真的返回值] if [表达式] else [表达式为假的返回值]
```python
a = 10 b = 1 if a == 0 else 0 print(b)
```

输出:
`0`

### 列表推导
``` python
a = [1,4,5,6,2,8,3,7,9] 
b = [i for i in a if i > 5] 
print(b)

c = [(0,1), (2,3), (4,6)] 
d = [r[1] for r in c] 
print(d)
```

输出:
```
[6, 8, 7, 9] 
[1, 3, 6]
```

### 列表/元祖切片
```python
a = [1,2,3,4,5,6] # (1,2,3,4,5,6) 
b = a[2:] 
c = a[1:2] # 半闭半开 
print(b) 
print(c)
```

输出:
`[3, 4, 5, 6] [2]`

## 基础函数实现
### 函数参数
```python
 def test(a, b, *args, ** kwargs): 
    print(a, b, args, kwargs)
test(1,2)
test(1,2,3,4,t=5)
n = [4,5] m = {'x':6, 'y':7} 
test(1,2, *n, ** m) # 结构传递，等同test(1,2,3,4,x=6,y=7) 
```

输出:
```
1 2 () {} 
1 2 (3, 4) {'t': 5} 
1 2 (4, 5) {'x': 6, 'y': 7}
```
### 统计列表中元素次数
```python
a = [1,2,3,3,2,4,5] 
print(a.count(2))
```
输出:
`2`
#### 方法1
```python
from collections import Counter
    a = [1,2,3,3,2,4,5]
    b = Counter(a) 
    print(b)
```

#### 方法2
```python
a = [1,2,3,3,2,4,5] 
c = { i: a.count(i) for i in set(a) } 
print(c)
```

输出:
```python
Counter({2: 2, 3: 2, 1: 1, 4: 1, 5: 1}) 
{1: 1, 2: 2, 3: 2, 4: 1, 5: 1}
```

### 列表去重
```python
a = [1,2,3,3,2,4,5] 
b = list(set(a)) 
print(a, b)
```

输出:
`[1, 2, 3, 3, 2, 4, 5] [1, 2, 3, 4, 5]`

### 字典推导
```python 
a = [['name','Robin'], ['age',30]] 
b = { r[0]: r[1] for r in a } 
print(b)
```

输出:
```
{‘name': 'Robin', 'age': 30}
```

### 字典生成
```python
a = [['name','Robin'], ['age',30]] 
b = dict(a) 
print(b)
```

输出:
`{'name': 'Robin', 'age': 30}`

### 字典转元组
```python
a = {'name':'Robin', 'age':30} 
print(list(a.items()))
```

输出:
`[('name', 'Robin'), ('age', 30)]`

### zip 运用
```python
a = [1,2,3,4] 
b = ['a','b','c','d'] 
c = zip(a, b) 
print(list(c))
```

输出:
`[(1, 'a'), (2, 'b'), (3, 'c'), (4, 'd')]`

## 字符串函数
### 字符串重复
```python
a = 'a' 
b = a * 10 
print(b)
```

输出:
`aaaaaaaaaa`

### 字符串拼接
```python
a = ['Hello', 'World', '!'] 
b = '~'.join(a) 
print(b)
```

输出:
`Hello~World~!`

### 字符串包含
```python
a = 'Hello World !' 
print('World' in a) 
print('abc' in a)
```

输出:
`True False`

### 字符串翻转
```python
class Solution:
    def reverseWords(self, s: str) -> str:
        # join() 方法用于将序列中的元素以指定的字符连接生成一个新的字符串。
        # strip() 方法用于移除字符串头尾指定的字符（默认为空格）或字符序列。
        return " ".join(s.strip().split()[::-1])
```
输出：
```
输入："a good   example"
输出："example good a"
解释：如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
```

## 列表推导实现
### map
```python 
a = [{'name':'A', 'id':1}, {'name':'B', 'id':2}] 
b = map(lambda d:d['id'], a) 
print(list(b))
```

### 列表推导实现
```python
c = [d['id'] for d in a] 
print(c)
```
输出:
`[1, 2] [1, 2]`

### filter
```python 
a = [1,4,5,6,2,8,3,7,9] 
b = filter(lambda i: i > 5, a) 
print(list(b))
```

### 列表推导实现
```python
c = [i for i in a if i > 5] 
print(c) 
```
输出:
`[6, 8, 7, 9] [6, 8, 7, 9]`

## 代码格式优化
### 获取索引和元素
#### 丑代码
```python
a = ['A', 'B', 'C'] 
n = 0 
for i in a: 
    print(n, i) 
    n += 1
for i in range(len(a)):
	  print(i, a[i])

```

#### 推荐代码
```python
for n, i in enumerate(a): 
    print(n, i)
```

输出:
`0 A 1 B 2 C 0 A 1 B 2 C 0 A 1 B 2 C`

### 简化 if
```python
a = 1 
if a == 1 or a == 2 or a == 3 or a == 8: pass # 不推荐做法 
if a in [1,2,3,8,9]: pass # 推荐做法
```

#### 丑代码
```python
a = 1 
if a == 1: b = 'A' elif a == 2: b = 'B' else: b = 'C' 
print(b)
```
#### 简化代码
```python
d = {1:'A', 2:'B'} 
b = d.get(a, 'C') 
print(b)
```
输出:
`A A`

#web
