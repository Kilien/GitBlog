# LeetCode-703-数据流中的第 K 大元素


# Kth Largest Element in a Stream
**Leetcoed 703.Kth Largest Element in a Stream**

Design a class to findthe**k**th largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.
YourKthLargestclass will have a constructor which accepts an integerkand an integer arraynums, which contains initial elements fromthe stream. For each call to the methodKthLargest.add, return the element representing the kth largest element in the stream.

**Example**
```python
int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(3); // returns 4
kthLargest.add(5); // returns 5
kthLargest.add(10); // returns 5
kthLargest.add(9); // returns 8
kthLargest.add(4); // returns 8
```

题意：
设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。

```Python
# @Author:Kilien
# @lc app=leetcode id=703 lang=python3
#
# [703] Kth Largest Element in a Stream
# 思路：将列表转化为小顶堆，保证第k个大的元素在堆顶，
# 若堆中元素个数小于k，则后续元素入堆，重新排序，直至堆满足k个元素
# 若后续加入元素比堆顶大则剔除堆顶元素，该元素加入小顶堆，重新排序
# 若后续加入元素比堆顶小则忽略
class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.pool = nums
        self.k = k
        heapq.heapify(self.pool)
        while len(self.pool) > k:
            heapq.heappop(self.pool)

    def add(self, val: int) -> int:
        if len(self.pool) < self.k:
            heapq.heappush(self.pool, val)
        elif val > self.pool[0]:
            heapq.heapreplace(self.pool, val)
        return self.pool[0]


# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)
```

**heapq**定义：
> 这个模块提供了堆队列算法的实现，也称为优先队列算法。
> 
> 堆是一个二叉树，它的每个父节点的值都只会小于或大于所有孩子节点（的值）。它使用了数组来实现：从零开始计数，对于所有的 k ，都有heap[k] <= heap[2*k+1]和 heap[k] <= heap[2*k+2] 。
> 
> 为了便于比较，不存在的元素被认为是无限大。堆最有趣的特性在于最小的元素总是在根结点：heap[0] 。


**heaoq**方法：

heapq.**heappush**(heap, item)
* 将 item 的值加入 heap 中，保持堆的不变性。

heapq.**heappop**(heap)
* 弹出并返回 heap 的最小的元素，保持堆的不变性。如果堆为空，抛出 IndexError 。使用 heap[0] ，可以只访问最小的元素而不弹出它。

heapq.**heappushpop**(heap, item)
* 将 item 放入堆中，然后弹出并返回 heap 的最小元素。该组合操作比先调用  heappush() 再调用 heappop() 运行起来更有效率。

heapq.**heapify**(x)
* 将list x 转换成堆，原地，线性时间内。

详见官方文档：
{{< link href="https://docs.python.org/zh-cn/3/library/heapq.html?highlight=heapq" content="heapq — 堆队列算法 — Python 3.7.3 文档" title="Visit Upstage!" >}}




