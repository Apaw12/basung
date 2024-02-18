// Dictionary data
var dictionary = [
  { english: "Abstraction", indonesia: "Abstraksi" },
  { english: "Access Control", indonesia: "Kontrol Akses" },
  { english: "Activation Function", indonesia: "Fungsi Aktivasi" },
  { english: "Active Learning", indonesia: "Pembelajaran Aktif" },
  { english: "Adversarial Attack", indonesia: "Serangan Adversarial" },
  { english: "Agile Development", indonesia: "Pengembangan Agile" },
  { english: "AI Ethics", indonesia: "Etika Kecerdasan Buatan" },
  { english: "Algorithmic Bias", indonesia: "Bias Algoritmik" },
  { english: "Algorithmic Trading", indonesia: "Perdagangan Algoritmik" },
  { english: "Anomaly Detection", indonesia: "Deteksi Anomali" },
  { english: "API (Application Programming Interface)", indonesia: "API (Antarmuka Pemrograman Aplikasi)" },
  { english: "AR (Augmented Reality)", indonesia: "AR (Realitas Tertambah)" },
  { english: "Artificial General Intelligence (AGI)", indonesia: "Kecerdasan Buatan Umum (AGI)" },
  { english: "Artificial Neural Network (ANN)", indonesia: "Jaringan Saraf Buatan (ANN)" },
  { english: "Association Rule Mining", indonesia: "Pertambangan Aturan Asosiasi" },
  { english: "Autonomous Systems", indonesia: "Sistem Otonom" },
  { english: "Backpropagation", indonesia: "Pengembalian Balik" },
  { english: "Batch Processing", indonesia: "Pemrosesan Batch" },
  { english: "Bayesian Inference", indonesia: "Pengambilan Keputusan Bayesian" },
  { english: "Behavioral Analytics", indonesia: "Analitik Perilaku" },
  { english: "Big Data Analytics", indonesia: "Analitik Big Data" },
  { english: "Binary Classification", indonesia: "Klasifikasi Biner" },
  { english: "Bioinformatics", indonesia: "Bioinformatika" },
  { english: "Blockchain Technology", indonesia: "Teknologi Blockchain" },
  { english: "Bots", indonesia: "Bot" },
  { english: "Business Intelligence (BI)", indonesia: "Intelegensi Bisnis (BI)" },
  { english: "Chatbot", indonesia: "Chatbot" },
  { english: "Classification", indonesia: "Klasifikasi" },
  { english: "Clickstream Analysis", indonesia: "Analisis Jejak Klik" },
  { english: "Cloud Computing", indonesia: "Komputasi Awan" },
  { english: "Cluster Analysis", indonesia: "Analisis Klaster" },
  { english: "CNN (Convolutional Neural Network)", indonesia: "CNN (Jaringan Saraf Konvolusi)" },
  { english: "Collaborative Filtering", indonesia: "Pemfilteran Kolaboratif" },
  { english: "Computational Biology", indonesia: "Biologi Komputasional" },
  { english: "Computer Vision", indonesia: "Visi Komputer" },
  { english: "Content Management System (CMS)", indonesia: "Sistem Manajemen Konten (CMS)" },
  { english: "Convolution", indonesia: "Konvolusi" },
  { english: "Cybersecurity", indonesia: "Keamanan Siber" },
  { english: "Data Aggregation", indonesia: "Aggregasi Data" },
  { english: "Data Analytics", indonesia: "Analitik Data" },
  { english: "Data Cleaning", indonesia: "Pembersihan Data" },
  { english: "Data Compression", indonesia: "Kompresi Data" },
  { english: "Data Engineering", indonesia: "Teknik Data" },
  { english: "Data Governance", indonesia: "Pemerintahan Data" },
  { english: "Data Integration", indonesia: "Integrasi Data" },
  { english: "Data Lake", indonesia: "Danau Data" },
  { english: "Data Leakage", indonesia: "Kebocoran Data" },
  { english: "Data Loss Prevention (DLP)", indonesia: "Pencegahan Kehilangan Data (DLP)" },
  { english: "Data Management", indonesia: "Manajemen Data" },
  { english: "Data Mining", indonesia: "Pertambangan Data" },
  { english: "Data Modeling", indonesia: "Pemodelan Data" },
  { english: "Data Preprocessing", indonesia: "Pra-Pemrosesan Data" },
  { english: "Data Privacy", indonesia: "Privasi Data" },
  { english: "Data Protection", indonesia: "Perlindungan Data" },
  { english: "Data Quality", indonesia: "Kualitas Data" },
  { english: "Data Science", indonesia: "Ilmu Data" },
  { english: "Data Security", indonesia: "Keamanan Data" },
  { english: "Data Structures", indonesia: "Struktur Data" },
  { english: "Data Visualization", indonesia: "Visualisasi Data" },
  { english: "Database Management System (DBMS)", indonesia: "Sistem Manajemen Basis Data (DBMS)" },
  { english: "Decision Support System (DSS)", indonesia: "Sistem Pendukung Keputusan (DSS)" },
  { english: "Deep Learning", indonesia: "Pembelajaran Mendalam" },
  { english: "Deepfake", indonesia: "Deepfake" },
  { english: "Deepfake Detection", indonesia: "Deteksi Deepfake" },
  { english: "Defect Prediction", indonesia: "Prediksi Cacat" },
  { english: "Denial of Service (DoS)", indonesia: "Penolakan Layanan (DoS)" },
  { english: "Digital Forensics", indonesia: "Forensik Digital" },
  { english: "Dimensionality Reduction", indonesia: "Reduksi Dimensi" },
  { english: "Distributed Computing", indonesia: "Komputasi Terdistribusi" },
  { english: "Document Classification", indonesia: "Klasifikasi Dokumen" },
  { english: "Edge Computing", indonesia: "Komputasi Tepi" },
  { english: "EHR (Electronic Health Record)", indonesia: "EHR (Rekam Medis Elektronik)" },
  { english: "Emotion Recognition", indonesia: "Pengenalan Emosi" },
  { english: "Encryption", indonesia: "Enkripsi" },
  { english: "Ensemble Learning", indonesia: "Pembelajaran Ensemble" },
  { english: "Entity Resolution", indonesia: "Pemecahan Entitas" },
  { english: "Epidemic Modeling", indonesia: "Pemodelan Epidemi" },
  { english: "Error Detection and Correction", indonesia: "Deteksi dan Koreksi Kesalahan" },
  { english: "Explainable AI (XAI)", indonesia: "AI yang Dapat Dijelaskan (XAI)" },
  { english: "Expert System", indonesia: "Sistem Pakar" },
  { english: "Facial Recognition", indonesia: "Pengenalan Wajah" },
  { english: "Federated Learning", indonesia: "Pembelajaran Terfederasi" },
  { english: "Feedback Loop", indonesia: "Loop Umpan Balik" },
  { english: "File System", indonesia: "Sistem Berkas" },
  { english: "Finite State Machine (FSM)", indonesia: "Mesin Keadaan Terbatas (FSM)" },
  { english: "Fraud Detection", indonesia: "Deteksi Penipuan" },
  { english: "Fuzzy Logic", indonesia: "Logika Fuzzy" },
  { english: "Game Theory", indonesia: "Teori Permainan" },
  { english: "GDPR (General Data Protection Regulation)", indonesia: "GDPR (Regulasi Perlindungan Data Umum)" },
  { english: "Geospatial Analysis", indonesia: "Analisis Geospasial" },
  { english: "Git (Version Control System)", indonesia: "Git (Sistem Kontrol Versi)" },
  { english: "GPU (Graphics Processing Unit)", indonesia: "GPU (Unit Pemrosesan Grafis)" },
  { english: "Graph Database", indonesia: "Basis Data Graf" },
  { english: "Hadoop", indonesia: "Hadoop" },
  { english: "Hash Function", indonesia: "Fungsi Hash" },
  { english: "Healthcare Informatics", indonesia: "Informatika Kesehatan" },
  { english: "Heuristic Algorithm", indonesia: "Algoritma Heuristik" },
  { english: "Hidden Markov Model (HMM)", indonesia: "Model Markov Tersembunyi (HMM)" },
  { english: "Human-Computer Interaction (HCI)", indonesia: "Interaksi Manusia Komputer (HCI)" },
  { english: "Hybrid Model", indonesia: "Model Hibrida" },
  { english: "Hypothesis Testing", indonesia: "Uji Hipotesis" },
  { english: "Identity Verification", indonesia: "Verifikasi Identitas" },
  { english: "Image Processing", indonesia: "Pemrosesan Gambar" },
  { english: "Imposter Syndrome", indonesia: "Sindrom Palsu" },
  { english: "Incremental Learning", indonesia: "Pembelajaran Bertahap" },
  { english: "Inductive Reasoning", indonesia: "Pemikiran Induktif" },
  { english: "Information Retrieval", indonesia: "Pengambilan Informasi" },
  { english: "Internet of Things (IoT)", indonesia: "Internet of Things (IoT)" },
  { english: "Intrusion Detection System (IDS)", indonesia: "Sistem Deteksi Intrusi (IDS)" },
  { english: "Java (Programming Language)", indonesia: "Java (Bahasa Pemrograman)" },
  { english: "JavaScript (Programming Language)", indonesia: "JavaScript (Bahasa Pemrograman)" },
  { english: "K-means Clustering", indonesia: "K-means Clustering" },
  { english: "Knowledge Graph", indonesia: "Graf Pengetahuan" },
  { english: "Lambda Architecture", indonesia: "Arsitektur Lambda" },
  { english: "LASSO (Least Absolute Shrinkage and Selection Operator)", indonesia: "LASSO (Operator Seleksi dan Penyusutan Mutlak Terkecil)" },
  { english: "Latent Dirichlet Allocation (LDA)", indonesia: "Alokasi Dirichlet Tersembunyi (LDA)" },
  { english: "Latent Semantic Analysis (LSA)", indonesia: "Analisis Semantik Tersembunyi (LSA)" },
  { english: "Machine Learning", indonesia: "Pembelajaran Mesin" },
  { english: "MapReduce", indonesia: "MapReduce" },
  { english: "Market Basket Analysis", indonesia: "Analisis Keranjang Belanja" },
  { english: "Markov Chain", indonesia: "Rantai Markov" },
  { english: "Metadata", indonesia: "Metadata" },
  { english: "Microservices", indonesia: "Microservices" },
  { english: "Model Evaluation", indonesia: "Evaluasi Model" },
  { english: "Model Interpretability", indonesia: "Interpretabilitas Model" },
  { english: "Multiclass Classification", indonesia: "Klasifikasi Multikelas" },
  { english: "Multimodal Learning", indonesia: "Pembelajaran Multimodal" },
  { english: "Multivariate Analysis", indonesia: "Analisis Multivariat" },
  { english: "Natural Language Processing (NLP)", indonesia: "Pemrosesan Bahasa Alami (NLP)" },
  { english: "Neural Network Architecture", indonesia: "Arsitektur Jaringan Saraf" },
  { english: "NoSQL Database", indonesia: "Basis Data NoSQL" },
  { english: "Object Detection", indonesia: "Deteksi Objek" },
  { english: "Object-Oriented Programming (OOP)", indonesia: "Pemrograman Berorientasi Objek (OOP)" },
  { english: "OCR (Optical Character Recognition)", indonesia: "OCR (Pengenalan Karakter Optik)" },
  { english: "Online Learning", indonesia: "Pembelajaran Online" },
  { english: "Open Source", indonesia: "Sumber Terbuka" },
  { english: "Outlier Detection", indonesia: "Deteksi Pencilan" },
  { english: "Overfitting", indonesia: "Overfitting" },
  { english: "Parallel Computing", indonesia: "Komputasi Paralel" },
  { english: "Particle Swarm Optimization (PSO)", indonesia: "Optimisasi Kumpulan Partikel (PSO)" },
  { english: "Pattern Recognition", indonesia: "Pengenalan Pola" },
  { english: "Peer Review", indonesia: "Ulasan Sejawat" },
  { english: "Performance Metrics", indonesia: "Metrik Kinerja" },
  { english: "Phishing", indonesia: "Phishing" },
  { english: "Predictive Analytics", indonesia: "Analitik Prediktif" },
  { english: "Privacy-Preserving Data Mining", indonesia: "Pertambangan Data yang Memperhatikan Privasi" },
  { english: "Probabilistic Graphical Model", indonesia: "Model Grafis Probabilistik" },
  { english: "Programmatic Advertising", indonesia: "Periklanan Programatik" },
  { english: "Python (Programming Language)", indonesia: "Python (Bahasa Pemrograman)" },
  { english: "Q-learning", indonesia: "Q-learning" },
  { english: "Quantum Computing", indonesia: "Komputasi Kuantum" },
  { english: "R (Programming Language)", indonesia: "R (Bahasa Pemrograman)" },
  { english: "Random Forest", indonesia: "Hutan Acak" },
  { english: "Recommender System", indonesia: "Sistem Rekomendasi" },
  { english: "Regression Analysis", indonesia: "Analisis Regresi" },
  { english: "Reinforcement Learning", indonesia: "Pembelajaran Penguatan" },
  { english: "Remote Sensing", indonesia: "Pendeteksian Jarak Jauh" },
  { english: "Reproducible Research", indonesia: "Penelitian yang Dapat Direproduksi" },
  { english: "Reverse Engineering", indonesia: "Rekayasa Balik" },
  { english: "Risk Assessment", indonesia: "Penilaian Risiko" },
  { english: "Robotics", indonesia: "Robotika" },
  { english: "Root Cause Analysis", indonesia: "Analisis Penyebab Akar" },
  { english: "Ruby (Programming Language)", indonesia: "Ruby (Bahasa Pemrograman)" },
  { english: "RPA (Robotic Process Automation)", indonesia: "Automasi Proses Robotic (RPA)" },
  { english: "Rule-Based System", indonesia: "Sistem Berbasis Aturan" },
  { english: "SaaS (Software as a Service)", indonesia: "SaaS (Perangkat Lunak sebagai Layanan)" },
  { english: "Scala (Programming Language)", indonesia: "Scala (Bahasa Pemrograman)" },
  { english: "Scikit-learn", indonesia: "Scikit-learn" },
  { english: "Search Engine Optimization (SEO)", indonesia: "Optimisasi Mesin Pencari (SEO)" },
  { english: "Secure Multiparty Computation (SMC)", indonesia: "Komputasi Multipihak yang Aman (SMC)" },
  { english: "Security Token", indonesia: "Token Keamanan" },
  { english: "Sentiment Analysis", indonesia: "Analisis Sentimen" },
  { english: "Sequence Alignment", indonesia: "Penyelarasan Urutan" },
  { english: "Sequential Pattern Mining", indonesia: "Pertambangan Pola Berurutan" },
  { english: "SIEM (Security Information and Event Management)", indonesia: "SIEM (Manajemen Informasi dan Kejadian Keamanan)" },
  { english: "Simulation", indonesia: "Simulasi" },
  { english: "Singular Value Decomposition (SVD)", indonesia: "Pemisahan Nilai Tunggal (SVD)" },
  { english: "Smart Contract", indonesia: "Kontrak Pintar" },
  { english: "Social Network Analysis (SNA)", indonesia: "Analisis Jaringan Sosial (SNA)" },
  { english: "Software Engineering", indonesia: "Teknik Perangkat Lunak" },
  { english: "Software Testing", indonesia: "Pengujian Perangkat Lunak" },
  { english: "Source Code", indonesia: "Kode Sumber" },
  { english: "SQL (Structured Query Language)", indonesia: "SQL (Bahasa Pertanyaan Terstruktur)" },
  { english: "SSL/TLS (Secure Sockets Layer/Transport Layer Security)", indonesia: "SSL/TLS (Lapisan Soket Aman/Keamanan Lapisan Transport)" },
  { english: "Stochastic Gradient Descent (SGD)", indonesia: "Penurunan Gradien Stokastik (SGD)" },
  { english: "Supervised Learning", indonesia: "Pembelajaran Terawasi" },
  { english: "Support Vector Machine (SVM)", indonesia: "Mesin Vektor Dukungan (SVM)" },
  { english: "Swarm Intelligence", indonesia: "Kecerdasan Kumpulan" },
  { english: "System Integration", indonesia: "Integrasi Sistem" },
  { english: "Tableau (Data Visualization Tool)", indonesia: "Tableau (Alat Visualisasi Data)" },
  { english: "TensorFlow", indonesia: "TensorFlow" },
  { english: "Text Analytics", indonesia: "Analitik Teks" },
  { english: "Threat Intelligence", indonesia: "Intelejen Ancaman" },
  { english: "Time Series Analysis", indonesia: "Analisis Seri Waktu" },
  { english: "Transfer Learning", indonesia: "Pembelajaran Transfer" },
  { english: "Trust Model", indonesia: "Model Kepercayaan" },
  { english: "UI/UX Design", indonesia: "Desain Antarmuka Pengguna (UI/UX)" },
  { english: "Unstructured Data", indonesia: "Data Tidak Terstruktur" },
  { english: "Usability Testing", indonesia: "Pengujian Kegunaan" },
  { english: "User Authentication", indonesia: "Otentikasi Pengguna" },
  { english: "User Interface", indonesia: "Antarmuka Pengguna" },
  { english: "Variational Autoencoder (VAE)", indonesia: "Autoencoder Variasional (VAE)" },
  { english: "Version Control", indonesia: "Kontrol Versi" },
  { english: "Virtual Private Network (VPN)", indonesia: "Jaringan Pribadi Virtual (VPN)" },
  { english: "Virtual Reality (VR)", indonesia: "Realitas Virtual (VR)" },
  { english: "Voice Recognition", indonesia: "Pengenalan Suara" },
  { english: "Web Analytics", indonesia: "Analitika Web" },
  { english: "Web Scraping", indonesia: "Pencabutan Data Web" },
  { english: "Web Security", indonesia: "Keamanan Web" },
  { english: "Zero-Day Vulnerability", indonesia: "Kerentanan Nol Hari" },
  { english: "3D Printing", indonesia: "Pencetakan 3D" },
  { english: "Access Control List (ACL)", indonesia: "Daftar Kontrol Akses (ACL)" },
  { english: "Activation Function", indonesia: "Fungsi Aktivasi" },
  { english: "AdaBoost", indonesia: "AdaBoost" },
  { english: "Adversarial Machine Learning", indonesia: "Pembelajaran Mesin Adversarial" },
  { english: "Agent-Based Modeling", indonesia: "Pemodelan Berbasis Agen" },
  { english: "Algorithmic Trading", indonesia: "Perdagangan Algoritmik" },
  { english: "Anomaly Detection", indonesia: "Deteksi Anomali" },
  { english: "Apache Hadoop", indonesia: "Apache Hadoop" },
  { english: "Apache Spark", indonesia: "Apache Spark" },
  { english: "Apache Storm", indonesia: "Apache Storm" },
  { english: "API (Application Programming Interface)", indonesia: "API (Antarmuka Pemrograman Aplikasi)" },
  { english: "Apache Kafka", indonesia: "Apache Kafka" },
  { english: "Application Security", indonesia: "Keamanan Aplikasi" },
  { english: "ARIMA (AutoRegressive Integrated Moving Average)", indonesia: "ARIMA (Rata-rata Bergerak Terpadu Autoregressif)" },
  { english: "Artificial General Intelligence (AGI)", indonesia: "Kecerdasan Buatan Umum (AGI)" },
  { english: "Association Rule Learning", indonesia: "Pembelajaran Aturan Asosiasi" },
  { english: "Attention Mechanism", indonesia: "Mekanisme Perhatian" },
  { english: "Autoencoder", indonesia: "Autoencoder" },
  { english: "Automated Machine Learning (AutoML)", indonesia: "Pembelajaran Mesin Otomatis (AutoML)" },
  { english: "Backpropagation", indonesia: "Pembelajaran Mundur" },
  { english: "Bagging", indonesia: "Bagging" },
  { english: "Bayesian Network", indonesia: "Jaringan Bayesian" },
  { english: "Bayes' Theorem", indonesia: "Teorema Bayes" },
  { english: "Biometrics", indonesia: "Biometrik" },
  { english: "Bisection Method", indonesia: "Metode Pembagian Dua" },
  { english: "Blockchain Technology", indonesia: "Teknologi Blockchain" },
  { english: "Bootstrapping", indonesia: "Bootstrapping" },
  { english: "Business Analytics", indonesia: "Analitika Bisnis" },
  { english: "Cascading Style Sheets (CSS)", indonesia: "Cascading Style Sheets (CSS)" },
  { english: "Cellular Automaton", indonesia: "Automaton Seluler" },
  { english: "Chaotic System", indonesia: "Sistem Kacau" },
  { english: "Client-Server Model", indonesia: "Model Klien-Server" },
  { english: "Clustering Algorithm", indonesia: "Algoritma Pengelompokan" },
  { english: "CockroachDB", indonesia: "CockroachDB" },
  { english: "Code Repository", indonesia: "Repositori Kode" },
  { english: "Code Review", indonesia: "Ulasan Kode" },
  { english: "Code Smell", indonesia: "Bau Kode" },
  { english: "Cohort Analysis", indonesia: "Analisis Kohort" },
  { english: "Collaborative Filtering", indonesia: "Penyaringan Kolaboratif" },
  { english: "Computer-Aided Design (CAD)", indonesia: "Desain Berbantu Komputer (CAD)" },
  { english: "Computer Vision", indonesia: "Visi Komputer" },
  { english: "Confidence Interval", indonesia: "Interval Kepercayaan" },
  { english: "Confusion Matrix", indonesia: "Matriks Konfusi" },
  { english: "Convolutional Neural Network (CNN)", indonesia: "Jaringan Saraf Konvolusional (CNN)" },
  { english: "Cross-Validation", indonesia: "Validasi Silang" },
  { english: "Cryptocurrency", indonesia: "Kriptokurensi" },
  { english: "CUDA (Compute Unified Device Architecture)", indonesia: "CUDA (Arsitektur Perangkat Terpadu Komputasi)" },
  { english: "Customer Segmentation", indonesia: "Segmentasi Pelanggan" },
  { english: "Cyber Attack", indonesia: "Serangan Siber" },
  { english: "Data Augmentation", indonesia: "Pembesaran Data" },
  { english: "Data Imputation", indonesia: "Pengisian Data" },
  { english: "Data Lake", indonesia: "Danau Data" },
  { english: "Data Loss Prevention (DLP)", indonesia: "Pencegahan Kehilangan Data (DLP)" },
  { english: "Data Mart", indonesia: "Data Mart" },
  { english: "Data Mining", indonesia: "Pertambangan Data" },
  { english: "Data Preprocessing", indonesia: "Pra Pemrosesan Data" },
  { english: "Data Quality Assessment", indonesia: "Penilaian Kualitas Data" },
  { english: "Data Science", indonesia: "Ilmu Data" },
  { english: "Data Scientist", indonesia: "Ilmuwan Data" },
  { english: "Data Warehousing", indonesia: "Penggudangan Data" },
  { english: "Decision Boundary", indonesia: "Batas Keputusan" },
  { english: "Decision Tree", indonesia: "Pohon Keputusan" },
  { english: "Deep Learning", indonesia: "Pembelajaran Mendalam" },
  { english: "Dependency Injection", indonesia: "Injeksi Ketergantungan" },
  { english: "DevOps (Development and Operations)", indonesia: "DevOps (Pengembangan dan Operasi)" },
  { english: "Dimensionality Reduction", indonesia: "Pengurangan Dimensi" },
  { english: "Distributed Ledger", indonesia: "Buku Terdistribusi" },
  { english: "Docker", indonesia: "Docker" },
  { english: "Document Object Model (DOM)", indonesia: "Model Objek Dokumen (DOM)" },
  { english: "Domain Name System (DNS)", indonesia: "Sistem Nama Domain (DNS)" },
  { english: "Dropout Regularization", indonesia: "Regulasi Dropout" },
  { english: "E-commerce", indonesia: "E-commerce" },
  { english: "Eigenvalue", indonesia: "Nilai Eigen" },
  { english: "ElasticNet", indonesia: "ElasticNet" },
  { english: "Ensemble Learning", indonesia: "Pembelajaran Ensemble" },
  { english: "Entity-Relationship Diagram (ERD)", indonesia: "Diagram Entitas-Relasi (ERD)" },
  { english: "Ethereum", indonesia: "Ethereum" },
  { english: "Ethical Hacking", indonesia: "Peretasan Etis" },
  { english: "Evolutionary Algorithm", indonesia: "Algoritma Evolusi" },
  { english: "Expectation-Maximization (EM) Algorithm", indonesia: "Algoritma Expectation-Maximization (EM)" },
  { english: "Exploratory Data Analysis (EDA)", indonesia: "Analisis Data Eksploratori (EDA)" },
  { english: "Face Recognition", indonesia: "Pengenalan Wajah" },
  { english: "False Positive", indonesia: "Positif Palsu" },
  { english: "Federated Learning", indonesia: "Pembelajaran Federasi" },
  { english: "Feedforward Neural Network", indonesia: "Jaringan Saraf Maju" },
  { english: "Firewall", indonesia: "Firewall" },
  { english: "Flask (Python Web Framework)", indonesia: "Flask (Kerangka Kerja Web Python)" },
  { english: "Flink", indonesia: "Flink" },
  { english: "Flutter (Mobile App SDK)", indonesia: "Flutter (SDK Aplikasi Seluler)" },
  { english: "Forward Propagation", indonesia: "Propagasi Maju" },
  { english: "Frequent Pattern Mining", indonesia: "Pertambangan Pola Frekuensi" },
  { english: "Fuzzy Logic", indonesia: "Logika Fuzzy" },
  { english: "GAN (Generative Adversarial Network)", indonesia: "GAN (Jaringan Generatif Adversarial)" },
  { english: "Gaussian Distribution", indonesia: "Distribusi Gaussian" },
  { english: "Genetic Algorithm", indonesia: "Algoritma Genetika" },
  { english: "Git (Version Control System)", indonesia: "Git (Sistem Kontrol Versi)" },
  { english: "GitHub", indonesia: "GitHub" },
  { english: "Gradient Descent", indonesia: "Penurunan Gradien" },
  { english: "GraphQL (Graph Query Language)", indonesia: "GraphQL (Bahasa Permintaan Grafis)" },
  { english: "Graph Database", indonesia: "Database Graf" },
  { english: "Grid Computing", indonesia: "Komputasi Grid" },
  { english: "GUI (Graphical User Interface)", indonesia: "GUI (Antarmuka Pengguna Grafis)" },
  { english: "Hadoop", indonesia: "Hadoop" },
  { english: "Hash Function", indonesia: "Fungsi Hash" },
  { english: "Hierarchical Clustering", indonesia: "Pengelompokan Hirarkis" },
  { english: "HTTP (Hypertext Transfer Protocol)", indonesia: "HTTP (Protokol Transfer Hiperteks)" },
  { english: "Hybrid Cloud", indonesia: "Awan Hibrida" },
  { english: "Hyperparameter Tuning", indonesia: "Penyetelan Hiparameter" },
  { english: "IaaS (Infrastructure as a Service)", indonesia: "IaaS (Infrastruktur sebagai Layanan)" },
  { english: "ID3 Algorithm", indonesia: "Algoritma ID3" },
  { english: "Image Classification", indonesia: "Klasifikasi Gambar" },
  { english: "Image Recognition", indonesia: "Pengenalan Gambar" },
  { english: "Inference Engine", indonesia: "Mesin Inferensi" },
  { english: "Information Gain", indonesia: "Pertambahan Informasi" },
  { english: "IoT (Internet of Things)", indonesia: "IoT (Internet of Things)" },
  { english: "IP Address", indonesia: "Alamat IP" },
  { english: "Jupyter Notebook", indonesia: "Jupyter Notebook" },
  { english: "K-means Clustering", indonesia: "Pengelompokan K-means" },
  { english: "K-nearest Neighbors (KNN)", indonesia: "K Tetangga Terdekat (KNN)" },
  { english: "Kafka", indonesia: "Kafka" },
  { english: "Keras", indonesia: "Keras" },
  { english: "Kernel Density Estimation (KDE)", indonesia: "Estimasi Kerapatan Kernel (KDE)" },
  { english: "Kubernetes", indonesia: "Kubernetes" },
  { english: "L1 Regularization", indonesia: "Regresi L1" },
  { english: "L2 Regularization", indonesia: "Regresi L2" },
  { english: "LASSO Regression", indonesia: "Regresi LASSO" },
  { english: "Latent Dirichlet Allocation (LDA)", indonesia: "Alokasi Dirichlet Laten (LDA)" },
  { english: "Linear Regression", indonesia: "Regresi Linier" },
  { english: "Local Outlier Factor (LOF)", indonesia: "Faktor Anomali Lokal (LOF)" },
  { english: "Logistic Regression", indonesia: "Regresi Logistik" },
  { english: "Long Short-Term Memory (LSTM)", indonesia: "Memori Jangka Pendek Panjang (LSTM)" },
  { english: "Loss Function", indonesia: "Fungsi Kerugian" },
  { english: "MapReduce", indonesia: "MapReduce" },
  { english: "Market Basket Analysis", indonesia: "Analisis Keranjang Pasar" },
  { english: "Matplotlib (Python Library)", indonesia: "Matplotlib (Perpustakaan Python)" },
  { english: "Mean Squared Error (MSE)", indonesia: "Galat Kuadrat Rata-Rata (MSE)" },
  { english: "Metadata", indonesia: "Metadata" },
  { english: "Microservices Architecture", indonesia: "Arsitektur Microservices" },
  { english: "Model Selection", indonesia: "Pemilihan Model" },
  { english: "MongoDB", indonesia: "MongoDB" },
  { english: "Multi-Armed Bandit", indonesia: "Bandit Multi-Lengan" },
  { english: "Multiclass Classification", indonesia: "Klasifikasi Multikelas" },
  { english: "Multilayer Perceptron (MLP)", indonesia: "Perseptron Multilapis (MLP)" },
  { english: "Multimodal Learning", indonesia: "Pembelajaran Multimodal" },
  { english: "Naive Bayes Classifier", indonesia: "Klasifikasi Naive Bayes" },
  { english: "Natural Language Generation (NLG)", indonesia: "Generasi Bahasa Alami (NLG)" },
  { english: "Natural Language Processing (NLP)", indonesia: "Pemrosesan Bahasa Alami (NLP)" },
  { english: "Neural Network", indonesia: "Jaringan Saraf" },
  { english: "Node.js (JavaScript Runtime)", indonesia: "Node.js (Runtime JavaScript)" },
  { english: "NoSQL Database", indonesia: "Database NoSQL" },
  { english: "Normalization", indonesia: "Normalisasi" },
  { english: "NumPy (Python Library)", indonesia: "NumPy (Perpustakaan Python)" },
  { english: "OAuth (Open Authorization)", indonesia: "OAuth (Otorisasi Terbuka)" },
  { english: "OCR (Optical Character Recognition)", indonesia: "OCR (Pengenalan Karakter Optik)" },
  { english: "Online Learning", indonesia: "Pembelajaran Online" },
  { english: "OpenCV (Open Source Computer Vision Library)", indonesia: "OpenCV (Perpustakaan Visi Komputer Sumber Terbuka)" },
  { english: "Overfitting", indonesia: "Overfitting" },
  { english: "Pandas (Python Library)", indonesia: "Pandas (Perpustakaan Python)" },
  { english: "Parallel Computing", indonesia: "Komputasi Paralel" },
  { english: "PCA (Principal Component Analysis)", indonesia: "PCA (Analisis Komponen Utama)" },
  { english: "Perl (Programming Language)", indonesia: "Perl (Bahasa Pemrograman)" },
  { english: "Persistence Layer", indonesia: "Lapisan Persistensi" },
  { english: "PHP (Hypertext Preprocessor)", indonesia: "PHP (Pra-Pemroses Hiperteks)" },
  { english: "Pipeline", indonesia: "Saluran" },
  { english: "Policy Gradient Methods", indonesia: "Metode Gradien Kebijakan" },
  { english: "Pooling Layer", indonesia: "Lapisan Pengelompokan" },
  { english: "PostgreSQL", indonesia: "PostgreSQL" },
  { english: "Precision and Recall", indonesia: "Presisi dan Ingat" },
  { english: "Predictive Modeling", indonesia: "Model Prediktif" },
  { english: "Principal Component Analysis (PCA)", indonesia: "Analisis Komponen Utama (PCA)" },
  { english: "Procedural Programming", indonesia: "Pemrograman Prosedural" },
  { english: "Progressive Web App (PWA)", indonesia: "Aplikasi Web Progresif (PWA)" },
  { english: "PyTorch", indonesia: "PyTorch" },
  { english: "Python (Programming Language)", indonesia: "Python (Bahasa Pemrograman)" },
  { english: "Q-learning", indonesia: "Pembelajaran Q" },
  { english: "Quantum Computing", indonesia: "Komputasi Kuantum" },
  { english: "R (Programming Language)", indonesia: "R (Bahasa Pemrograman)" },
  { english: "Random Forest", indonesia: "Hutan Acak" },
  { english: "RDBMS (Relational Database Management System)", indonesia: "RDBMS (Sistem Manajemen Database Relasional)" },
  { english: "Recurrent Neural Network (RNN)", indonesia: "Jaringan Saraf Rekuren (RNN)" },
  { english: "Redis (Remote Dictionary Server)", indonesia: "Redis (Server Kamus Jarak Jauh)" },
  { english: "Regularization", indonesia: "Regulasi" },
  { english: "Reinforcement Learning", indonesia: "Pembelajaran Penguatan" },
  { english: "Relational Database", indonesia: "Database Relasional" },
  { english: "RESTful API", indonesia: "RESTful API" },
  { english: "Reverse Engineering", indonesia: "Rekayasa Balik" },
  { english: "RNN (Recurrent Neural Network)", indonesia: "RNN (Jaringan Saraf Rekuren)" },
  { english: "ROC Curve", indonesia: "Kurva ROC" },
  { english: "Root Mean Square Error (RMSE)", indonesia: "Galat Rata-Rata Kuadrat Akar (RMSE)" },
  { english: "Routing Algorithm", indonesia: "Algoritma Penyelenggaraan Rute" },
  { english: "Rule-Based System", indonesia: "Sistem Berbasis Aturan" },
  { english: "RxJava (Reactive Extensions for the JVM)", indonesia: "RxJava (Ekstensi Reaktif untuk JVM)" },
  { english: "SaaS (Software as a Service)", indonesia: "SaaS (Perangkat Lunak sebagai Layanan)" },
  { english: "Scala (Programming Language)", indonesia: "Scala (Bahasa Pemrograman)" },
  { english: "Scikit-learn (Python Library)", indonesia: "Scikit-learn (Perpustakaan Python)" },
  { english: "Scripting Language", indonesia: "Bahasa Skrip" },
  { english: "SDLC (Software Development Life Cycle)", indonesia: "SDLC (Siklus Hidup Pengembangan Perangkat Lunak)" },
  { english: "Self-organizing Map (SOM)", indonesia: "Peta Mandiri (SOM)" },
  { english: "Semantic Analysis", indonesia: "Analisis Semantik" },
  { english: "Semantic Segmentation", indonesia: "Segmentasi Semantik" },
  { english: "Sensitivity Analysis", indonesia: "Analisis Sensitivitas" },
  { english: "Sequential Pattern Mining", indonesia: "Pertambangan Pola Berurutan" },
  { english: "Serverless Computing", indonesia: "Komputasi Tanpa Server" },
  { english: "Shell Scripting", indonesia: "Skrip Shell" },
  { english: "SIEM (Security Information and Event Management)", indonesia: "SIEM (Manajemen Informasi Keamanan dan Kejadian)" },
  { english: "Signal Processing", indonesia: "Pemrosesan Sinyal" },
  { english: "Singular Value Decomposition (SVD)", indonesia: "Pembelahan Nilai Tunggal (SVD)" },
  { english: "Sigmoid Function", indonesia: "Fungsi Sigmoid" },
  { english: "Simulated Annealing", indonesia: "Annealing Disimulasikan" },
  { english: "Sketching Algorithm", indonesia: "Algoritma Sketsa" },
  { english: "Social Network Analysis (SNA)", indonesia: "Analisis Jaringan Sosial (SNA)" },
  { english: "Software Development", indonesia: "Pengembangan Perangkat Lunak" },
  { english: "Software Engineering", indonesia: "Teknik Perangkat Lunak" },
  { english: "Software Testing", indonesia: "Pengujian Perangkat Lunak" },
  { english: "SQL (Structured Query Language)", indonesia: "SQL (Bahasa Permintaan Terstruktur)" },
  { english: "SQL Injection", indonesia: "Injeksi SQL" },
  { english: "Stack Overflow", indonesia: "Tumpukan Terlampaui" },
  { english: "State Machine", indonesia: "Mesin Keadaan" },
  { english: "Supervised Learning", indonesia: "Pembelajaran Terawasi" },
  { english: "Support Vector Machine (SVM)", indonesia: "Mesin Vektor Dukungan (SVM)" },
  { english: "Swagger (API Documentation Tool)", indonesia: "Swagger (Alat Dokumentasi API)" },
  { english: "Synthetic Data", indonesia: "Data Sintetis" },
  { english: "Tableau (Data Visualization Tool)", indonesia: "Tableau (Alat Visualisasi Data)" },
  { english: "TensorFlow", indonesia: "TensorFlow" },
  { english: "Test Driven Development (TDD)", indonesia: "Pengembangan Berbasis Tes (TDD)" },
  { english: "Text Classification", indonesia: "Klasifikasi Teks" },
  { english: "Text Mining", indonesia: "Pertambangan Teks" },
  { english: "Time Series Analysis", indonesia: "Analisis Deret Waktu" },
  { english: "Tokenization", indonesia: "Tokenisasi" },
  { english: "Transfer Learning", indonesia: "Pembelajaran Transfer" },
  { english: "Tree-Based Model", indonesia: "Model Berbasis Pohon" },
  { english: "Tuple", indonesia: "Tuple" },
  { english: "UI/UX Design", indonesia: "Desain UI/UX" },
  { english: "Unsupervised Learning", indonesia: "Pembelajaran Tanpa Pengawasan" },
  { english: "URL (Uniform Resource Locator)", indonesia: "URL (Penunjuk Sumber Seragam)" },
  { english: "User Authentication", indonesia: "Otentikasi Pengguna" },
  { english: "Validation Set", indonesia: "Set Validasi" },
  { english: "Vanilla Neural Network", indonesia: "Jaringan Saraf Vanilla" },
  { english: "Vectorization", indonesia: "Vektorisasi" },
  { english: "Version Control System (VCS)", indonesia: "Sistem Kontrol Versi (VCS)" },
  { english: "Virtual Private Network (VPN)", indonesia: "Jaringan Pribadi Virtual (VPN)" },
  { english: "Virtual Reality (VR)", indonesia: "Realitas Virtual (VR)" },
  { english: "Visual Studio Code", indonesia: "Visual Studio Code" },
  { english: "Vue.js (JavaScript Framework)", indonesia: "Vue.js (Kerangka Kerja JavaScript)" },
  { english: "Web Application", indonesia: "Aplikasi Web" },
  { english: "Web Development", indonesia: "Pengembangan Web" },
  { english: "Web Scraping", indonesia: "Pengambilan Data Web" },
  { english: "Web Server", indonesia: "Server Web" },
  { english: "Web Socket", indonesia: "Soket Web" },
  { english: "White Box Testing", indonesia: "Pengujian Kotak Putih" },
  { english: "Word Embedding", indonesia: "Pembungkus Kata" },
  { english: "XGBoost", indonesia: "XGBoost" },
  { english: "XML (eXtensible Markup Language)", indonesia: "XML (Bahasa Penandaan yang Dapat Diperluas)" },
  { english: "YAML Ain't Markup Language (YAML)", indonesia: "YAML Bukan Bahasa Penandaan (YAML)" },
  { english: "Zero-Knowledge Proof", indonesia: "Bukti Tanpa Pengetahuan" },
  { english: "Zero-shot Learning", indonesia: "Pembelajaran Tanpa Tembakan" },
  { english: "Zero-Day Exploit", indonesia: "Eksploitasi Hari Nol" },
  { english: "Zero Trust Architecture", indonesia: "Arsitektur Kepercayaan Nol" },
  { english: "Zero Knowledge Encryption", indonesia: "Enkripsi Tanpa Pengetahuan" },
  { english: "Zero Knowledge Proof", indonesia: "Bukti Tanpa Pengetahuan" },
  { english: "Zero Knowledge Protocol", indonesia: "Protokol Tanpa Pengetahuan" },
  { english: "Zero Knowledge Authentication", indonesia: "Otentikasi Tanpa Pengetahuan" },
  { english: "Zero Knowledge Privacy", indonesia: "Privasi Tanpa Pengetahuan" },
  { english: "Zero Knowledge Security", indonesia: "Keamanan Tanpa Pengetahuan" },
  { english: "Zero Knowledge Blockchain", indonesia: "Blockchain Tanpa Pengetahuan" },
  { english: "Zero Knowledge Identity", indonesia: "Identitas Tanpa Pengetahuan" },
  { english: "Zero Knowledge Infrastructure", indonesia: "Infrastruktur Tanpa Pengetahuan" },
  { english: "Zero Knowledge Cloud", indonesia: "Awan Tanpa Pengetahuan" },
  { english: "Zero Knowledge Computing", indonesia: "Komputasi Tanpa Pengetahuan" },
  { english: "Zero Knowledge Confidentiality", indonesia: "Kerahasiaan Tanpa Pengetahuan" },
  { english: "Zero Knowledge Cryptography", indonesia: "Kriptografi Tanpa Pengetahuan" },
  { english: "Zero Knowledge Verification", indonesia: "Verifikasi Tanpa Pengetahuan" },
  { english: "Zero Knowledge Authentication Protocol", indonesia: "Protokol Otentikasi Tanpa Pengetahuan" },
  { english: "Zero Knowledge Password Proof", indonesia: "Bukti Kata Sandi Tanpa Pengetahuan" },
  { english: "Zero Knowledge Authentication Scheme", indonesia: "Skema Otentikasi Tanpa Pengetahuan" },
  { english: "Zero Knowledge Authentication System", indonesia: "Sistem Otentikasi Tanpa Pengetahuan" },
  { english: "Zero Knowledge Authentication Framework", indonesia: "Kerangka Kerja Otentikasi Tanpa Pengetahuan" },
  { english: "Zero Knowledge Authentication Method", indonesia: "Metode Otentikasi Tanpa Pengetahuan" },
  { english: "Zero Knowledge Authentication Process", indonesia: "Proses Otentikasi Tanpa Pengetahuan" },
  { english: "Zero Knowledge Authentication Solution", indonesia: "Solusi Otentikasi Tanpa Pengetahuan" },
  { english: "Zero Knowledge Authentication Implementation", indonesia: "Implementasi Otentikasi Tanpa Pengetahuan" },
  { english: "Zero Knowledge Authentication Architecture", indonesia: "Arsitektur Otentikasi Tanpa Pengetahuan" },
  { english: "Zero Knowledge Authentication Design", indonesia: "Desain Otentikasi Tanpa Pengetahuan" },
  { english: "Zero Knowledge Authentication Model", indonesia: "Model Otentikasi Tanpa Pengetahuan" },
  { english: "Zero Knowledge Authentication Application", indonesia: "Aplikasi Otentikasi Tanpa Pengetahuan" },
  { english: "Zero Knowledge Authentication Service", indonesia: "Layanan Otentikasi Tanpa Pengetahuan" },
  { english: "Zero Knowledge Authentication Provider", indonesia: "Penyedia Otentikasi Tanpa Pengetahuan" },
  { english: "Zero Knowledge Authentication Technology", indonesia: "Teknologi Otentikasi Tanpa Pengetahuan" },
  { english: "Zero Knowledge Authentication Tool", indonesia: "Alat Otentikasi Tanpa Pengetahuan" }
];

// Function to populate the dictionary list
function populateDictionary() {
    var ul = document.getElementById('dictionaryList');
    ul.innerHTML = ''; // Clear previous content

    // Loop through the dictionary data and create list items
    dictionary.forEach(function(item) {
        var li = document.createElement('li');
        li.innerHTML = '<strong>' + item.english + '</strong> - ' + item.indonesia;
        ul.appendChild(li);
    });
}
// Call the function to populate the dictionary list initially
populateDictionary();

// Function to search the dictionary
function searchDictionary() {
    var input, filter, ul, li, strong, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('dictionaryList');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        strong = li[i].getElementsByTagName('strong')[0];
        txtValue = strong.textContent || strong.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
