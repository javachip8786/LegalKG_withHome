zeroarray= np.zeros(20)
#counting the number of spikes on each time span 
for i in range(0,50):
  for j in range(0,89):
    if(zeromat[i][j]>0 and zeromat[i][j]<=0.1):
      zeroarray[10]+=1
    elif(zeromat[i][j]>0.1 and zeromat[i][j]<=0.2):
      zeroarray[11]+=1
    elif(zeromat[i][j]>0.2 and zeromat[i][j]<=0.3):
      zeroarray[12]+=1
    elif(zeromat[i][j]>0.3 and zeromat[i][j]<=0.4):
      zeroarray[13]+=1
    elif(zeromat[i][j]>0.4 and zeromat[i][j]<=0.5):
      zeroarray[14]+=1
    elif(zeromat[i][j]>0.5 and zeromat[i][j]<=0.6):
      zeroarray[15]+=1
    elif(zeromat[i][j]>0.6 and zeromat[i][j]<=0.7):
      zeroarray[16]+=1
    elif(zeromat[i][j]>0.7 and zeromat[i][j]<=0.8):
      zeroarray[17]+=1
    elif(zeromat[i][j]>0.8 and zeromat[i][j]<=0.9):
      zeroarray[18]+=1
    elif(zeromat[i][j]>0.9 and zeromat[i][j]<=1):
      zeroarray[19]+=1 
    elif(zeromat[i][j]>-1 and zeromat[i][j]<=-0.9):
      zeroarray[0]+=1
    elif(zeromat[i][j]>-0.9 and zeromat[i][j]<=-0.8):
      zeroarray[1]+=1
    elif(zeromat[i][j]>-0.8 and zeromat[i][j]<=-0.7):
      zeroarray[2]+=1
    elif(zeromat[i][j]>-0.7 and zeromat[i][j]<=-0.6):
      zeroarray[3]+=1
    elif(zeromat[i][j]>-0.6 and zeromat[i][j]<=-0.5):
      zeroarray[4]+=1
    elif(zeromat[i][j]>-0.5 and zeromat[i][j]<=-0.4):
      zeroarray[5]+=1
    elif(zeromat[i][j]>-0.4 and zeromat[i][j]<=-0.3):
      zeroarray[6]+=1
    elif(zeromat[i][j]>-0.3 and zeromat[i][j]<=-0.2):
      zeroarray[7]+=1
    elif(zeromat[i][j]>-0.2 and zeromat[i][j]<=-0.1):
      zeroarray[8]+=1
    elif(zeromat[i][j]>-0.1 and zeromat[i][j]<=0):
      zeroarray[9]+=1
    else:
      pass
#taking the average

for i in range(20): 
  zeroarray[i]/=50
#creating X-Axis point array: 
xx=[-1,-0.9,-0.8,-0.7,-0.6,-0.5,-0.4,-0.3,-0.2,-0.1,0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9] 
#plotting barplot
plot.bar(xx,zeroarray)
plot.show()