class Exp: pass     
class IntLit(Exp):
    def __init__(self, val):
        self.val = val
        
    def eval(self):
        return self.val
        
    def printPrefix(self):
        return str(self.val) + " "
        
class FloatLit(Exp):
    def __init__(self, val):
        self.val = val
    
    def eval(self):
        return self.val + " "
        
    def printPrefix(self):
        return str(self.val)
        
class BinExp(Exp):
    def __init__(self, o1, op, o2):
        self.left = o1
        self.op = op
        self.right = o2
    
    def eval(self):
        left = self.left.eval()
        right = self.right.eval()
        
        if self.op == "+": return left + right
        if self.op == "-": return left - right
        if self.op == "*": return left * right
        if self.op == "/": return left / right
        
    def printPrefix(self):
        return self.op + " " + self.left.printPrefix() + self.right.printPrefix()
        
class UnExp(Exp):
    def __init__(self, op, o):
        self.op = op
        self.operand = o
        
    def eval(self):
        if self.op == "+":
            return self.operand.val
        elif self.op == "-":
            return - self.operand.val

    def printPrefix(self):
        return self.op + ". " + self.operand.printPrefix()
x1 = IntLit(1)

x2 = FloatLit(2.0)

x3 = BinExp(x1,"+",x1)

x4 = UnExp("-",x1)

x5 = BinExp(x4,"+",BinExp(IntLit(4),"*",x2))

print(x5.printPrefix())
