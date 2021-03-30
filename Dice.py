import random
from collections import Counter
from math import*

pair = 0

count = 0
n = 10000

c1 = 0
c2 = 0
c3 = 0
c4 = 0
c5 = 0
c6 = 0

p62 = 0
p63 = 0
p64 = 0
p65 = 0
p66 = 0

p52 = 0
p53 = 0
p54 = 0
p55 = 0

p42 = 0
p43 = 0
p44 = 0

p32 = 0
p33 = 0

p22 = 0
for i in range(n):
  
  dice = [random.randint(1, 6),random.randint(1, 6),random.randint(1, 6),random.randint(1, 6),random.randint(1, 6),random.randint(1, 6)]

  # print(dice)
  counter = Counter(dice)
  
  if counter[1] >= 2:p62 += 1
  elif counter[2] >= 2:p62 += 1
  elif counter[3] >= 2:p62 += 1
  elif counter[4] >= 2:p62 += 1
  elif counter[5] >= 2:p62 += 1
  elif counter[6] >= 2:p62 += 1

  if counter[1] >= 3:p63 += 1
  elif counter[2] >= 3:p63 += 1
  elif counter[3] >= 3:p63 += 1
  elif counter[4] >= 3:p63 += 1
  elif counter[5] >= 3:p63 += 1
  elif counter[6] >= 3:p63 += 1

  if counter[1] >= 4:p64 += 1
  elif counter[2] >= 4:p64 += 1
  elif counter[3] >= 4:p64 += 1
  elif counter[4] >= 4:p64 += 1
  elif counter[5] >= 4:p64 += 1
  elif counter[6] >= 4:p64 += 1

  if counter[1] >= 5:p65 += 1
  elif counter[2] >= 5:p65 += 1
  elif counter[3] >= 5:p65 += 1
  elif counter[4] >= 5:p65 += 1
  elif counter[5] >= 5:p65 += 1
  elif counter[6] >= 5:p65 += 1
  
  if counter[1] >= 6:p66 += 1
  elif counter[2] >= 6:p66 += 1
  elif counter[3] >= 6:p66 += 1
  elif counter[4] >= 6:p66 += 1
  elif counter[5] >= 6:p66 += 1
  elif counter[6] >= 6:p66 += 1

  if counter[1] >= 2:p52 += 1
  elif counter[2] >= 2:p52 += 1
  elif counter[3] >= 2:p52 += 1
  elif counter[4] >= 2:p52 += 1
  elif counter[5] >= 2:p52 += 1

  if counter[1] >= 3:p53 += 1
  elif counter[2] >= 3:p53 += 1
  elif counter[3] >= 3:p53 += 1
  elif counter[4] >= 3:p53 += 1
  elif counter[5] >= 3:p53 += 1

  if counter[1] >= 4:p54 += 1
  elif counter[2] >= 4:p54 += 1
  elif counter[3] >= 4:p54 += 1
  elif counter[4] >= 4:p54 += 1
  elif counter[5] >= 4:p54 += 1

  if counter[1] >= 5:p55 += 1
  elif counter[2] >= 5:p55 += 1
  elif counter[3] >= 5:p55 += 1
  elif counter[4] >= 5:p55 += 1
  elif counter[5] >= 5:p55 += 1

  if counter[1] >= 2:p42 += 1
  elif counter[2] >= 2:p42 += 1
  elif counter[3] >= 2:p42 += 1
  elif counter[4] >= 2:p42 += 1

  if counter[1] >= 3:p43 += 1
  elif counter[2] >= 3:p43 += 1
  elif counter[3] >= 3:p43 += 1
  elif counter[4] >= 3:p43 += 1

  if counter[1] >= 4:p44 += 1
  elif counter[2] >= 4:p44 += 1
  elif counter[3] >= 4:p44 += 1
  elif counter[4] >= 4:p44 += 1

  if counter[1] >= 2:p32 += 1
  elif counter[2] >= 2:p32 += 1
  elif counter[3] >= 2:p32 += 1

  if counter[1] >= 3:p33 += 1
  elif counter[2] >= 3:p33 += 1
  elif counter[3] >= 3:p33 += 1

  if counter[1] >= 2:p22 += 1
  elif counter[2] >= 2:p22 += 1
  elif counter[3] >= 6:p22 += 1
  elif counter[4] >= 6:p22 += 1
  elif counter[5] >= 6:p22 += 1
  elif counter[6] >= 6:p22 += 1

  c1 += counter[1]
  c2 += counter[2]
  c3 += counter[3]
  c4 += counter[4]
  c5 += counter[5]
  c6 += counter[6]

print('count of dice: ','-1-',' |  ','-2-','  |  ','-3-','  |  ','-4-','  |  ','-5-','  |  ','-6-' )
print(' at least 1 |',round((100*(c1/n)/6),1),'  | ',round(100*(c1/n+c2/n)/6, 1),'  | ',round(100*(c1/n+c2/n+c3/n)/6,1),'  | ',round(100*(c1/n+c2/n+c3/n+c4/n)/6,1),'  | ',round(100*(c1/n+c2/n+c3/n+c4/n+c5/n)/6,1),'  | ',round(100*(c1/n+c2/n+c3/n+c4/n+c5/n+c6/n)/6,1))
print('  2 combo   |','-----',' | ',round(100*p22/n, 1),'  | ',round(100*p32/n, 1),'  | ',round(100*p42/n, 1),'  | ',round(100*p52/n, 1),'  | ',round(100*p62/n, 1))
print('  3 combo   |','-----',' | ','-----',' | ',            round(100*p33/n, 1),'  | ',round(100*p43/n, 1),'  | ',round(100*p53/n, 1),'  | ',round(100*p63/n, 1))
print('  4 combo   |','-----',' | ','-----', ' | ',  '-----',  ' | ',           round(100*p43/n, 1),'  | ',round(100*p54/n, 1),'   | ',round(100*p64/n, 1))
print('  5 combo   |','-----',' | ','-----', ' | ',  '-----',  ' | ',   '-----',  ' | ',                         round(100*p55/n, 1),'   | ',round(100*p65/n, 1))
print('  6 combo   |','-----',' | ','-----', ' | ','-----', ' | ','-----',  ' | ',  '-----',  ' | ',round(100*p66/n, 1))
