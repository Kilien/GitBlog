# LeetCode-160-相交链表


# LeetCode-160相交链表
编写一个程序，找到两个单链表相交的起始节点。
如下面的两个链表**：**
{{< image src="https://cdn.jsdelivr.net/gh/KiLien/Pics/Algm/LC_160_intersectionLinkList01.png" caption="相交链表" >}}
在节点 c1 开始相交。

**示例**：
{{< image src="https://cdn.jsdelivr.net/gh/KiLien/Pics/Algm/LC_160_intersectionLinkList02.png" caption="示例" >}}

> 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3  
> 输出：Reference of the node with value = 8  
> 输入解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。  

## 思路
1. 指针 pA 指向 A 链表，指针 pB 指向 B 链表，依次往后遍历
2. 如果 pA 到了末尾，则 pA = headB 继续遍历
3. 如果 pB 到了末尾，则 pB = headA 继续遍历
4. 如果较长的链表指针指向较短链表head时，长度差就消除了
5. 只需要将最短链表遍历两次即可找到位置

A = a + c(公共部分)
B = b +c(公共部分)
将 A B 相连
pA = A + B = (a + c + b) + c
pB = B + A = (b + c + a) + c
如果 A B 有交点, 刚好在 c 开始时相遇

## 代码
```python
class Solution(object):
    def getIntersectionNode(self, headA, headB):
        “””
        :type head1, head1: ListNode
        :rtype: ListNode
        “””
        if not headA or not headB:
            return None
        
        pa = headA
        pb = headB
        while pa is not pb:
            pa = headB if pa is None else pa.next
            pb = headA if pb is None else pb.next
        return pa
```
## 复杂度
### 时间：O(n)
### 空间：O(1)

