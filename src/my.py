
rads = np.arange(360)
plt.plot(rads, df.iloc[0], 'm.', label='neuron '+str(1))  #where 'm.' is the color magenta
#Setting the title
plt.title('Tuning curve')
#X-Label
plt.xlabel('Direction of Movement')
#Y-Label
plt.ylabel('rate of action potentials')
#denoting which is which
plt.legend()
plt.show()
plt.plot(rads, df.iloc[1], 'k.', label='neuron '+str(2)) #where 'k.' is the color 
#Setting the title
plt.title('Tuning curve')
#X-Label
plt.xlabel('Direction of Movement')
#Y-Label
plt.ylabel('rate of action potentials')
#denoting which is which
plt.legend()
plt.show()
plt.plot(rads, df.iloc[2], 'r.', label='neuron '+str(3)) #where 'r.' is the color
#Setting the title
plt.title('Tuning curve')
#X-Label
plt.xlabel('Direction of Movement')
#Y-Label
plt.ylabel('rate of action potentials')
#denoting which is which
plt.legend()
plt.show()
plt.plot(rads, df.iloc[3], 'c.', label='neuron '+str(4)) #where 'c.' is the color
#Setting the title
plt.title('Tuning curve')
#X-Label
plt.xlabel('Direction of Movement')
#Y-Label
plt.ylabel('rate of action potentials')
#denoting which is which
plt.legend()
plt.show()