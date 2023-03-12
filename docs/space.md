---
sidebar_position: 1
---

# Space

## Docking Operations 

### Research concept

The capture of a target spacecraft by a chaser is an on-orbit docking operation that requires an accurate, reliable, and robust object recognition algorithm. Vision-based guided spacecraft relative motion during close-proximity maneuvers has been consecutively applied using dynamic modeling as a spacecraft on-orbit service system. This research constructs a vision-based pose estimation model that performs image processing via a deep convolutional neural network. The pose estimation model was constructed by repurposing a modified pretrained GoogLeNet model with the available Unreal Engine 4 rendered dataset of the Soyuz spacecraft. In the implementation, the convolutional neural network learns from the data samples to create correlations between the images and the spacecraft’s six degrees-of-freedom parameters. The experiment has compared an exponential-based loss function and a weighted Euclidean-based loss function. Using the weighted Euclidean-based loss function, the implemented pose estimation model achieved moderately high performance with a position accuracy of 92.53 percent and an error of 1.2 m. The in-attitude prediction accuracy can reach 87.93 percent, and the errors in the three Euler angles do not exceed 7.6 degrees. This research can contribute to spacecraft detection and tracking problems. Although the finished vision-based model is specific to the environment of synthetic dataset, the model could be trained further to address actual docking operations in the future.


### Publications

(Q2) Phisannupawong, Thaweerath, Patcharin Kamsing, Peerapong Torteeka, Sittiporn Channumsin, Utane Sawangwit, Warunyu Hematulin, Tanatthep Jarawan, Thanaporn Somjit, Soemsak Yooyen, Daniel Delahaye, and Pisit Boonsrimuang. 2020. “Vision-Based Spacecraft Pose Estimation via a Deep Convolutional Neural Network for Noncooperative Docking Operations” Aerospace 7, no. 9: 126. https://doi.org/10.3390/aerospace7090126

T. Phisannupawong, P. Kamsing, P. Tortceka and S. Yooyen, “Vision-based attitude estimation for spacecraft docking operation through deep learning algorithm,” 2020 22nd International Conference on Advanced Communication Technology (ICACT), 2020, pp. 280-284, doi: 10.23919/ICACT48636.2020.9061445.

Full scholarship offer from Asia-Pacific Space Cooperation Organization(APSCO) for Mr. Thaweerath Phisannupawong to study master degree in Space Technology Application, Micro-satellite Technology, Beihang University, Beijing, China.

Full scholarship offer from China Scholarship Council(CSC) for Mr. Thaweerath Phisannupawong to study master degree in Control Science and Engineering, Research Field: Navigation, Guidance, and Control, Tsinghua University, Beijing, China.