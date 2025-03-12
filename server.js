// backend/app.js

import firebaseAdmin from 'firebase-admin';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { v4 as uuidv4 } from 'uuid';

// الحصول على ما يعادل __dirname في وحدات ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// إعداد Firebase Admin SDK باستخدام مفتاح الخدمة الذي تم تنزيله
const serviceAccount = path.join(__dirname, 'src', 'codesphere-fec25-firebase-adminsdk-fbsvc-a598fdbc3b.json'); // المسار الصحيح للملف الذي تم تنزيله
console.log(serviceAccount); // طباعة المسار

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),  // استخدام المفتاح في التهيئة
});

const app = express();
const PORT = process.env.PORT || 4000;


// Middleware
app.use(cors());
app.use(bodyParser.json());

// الحصول على مرجع إلى قاعدة بيانات Firestore
const db = firebaseAdmin.firestore();

// مسارات API

// الحصول على جميع المشاريع
app.get('/api/projects', async (req, res) => {
  try {
    console.log('محاولة الاتصال بـ Firestore...');
    const projectsSnapshot = await db.collection('projects').get();
    if (projectsSnapshot.empty) {
      console.log('لا توجد مشاريع في قاعدة البيانات.');
      return res.status(404).json({ message: 'لا توجد مشاريع في قاعدة البيانات.' });
    }

    const projects = projectsSnapshot.docs.map(doc => doc.data());
    console.log('تم الحصول على المشاريع بنجاح:', projects);
    res.json(projects);
  } catch (error) {
    console.error('خطأ في الاتصال بـ Firestore:', error);
    res.status(500).json({ message: 'حدث خطأ أثناء الحصول على المشاريع', error: error.message });
  }
});

// الحصول على مشروع واحد حسب المعرف
app.get('/api/projects/:id', async (req, res) => {
  try {
    const projectDoc = await db.collection('projects').doc(req.params.id).get();
    if (!projectDoc.exists) {
      return res.status(404).json({ message: 'المشروع غير موجود' });
    }
    res.json(projectDoc.data());
  } catch (error) {
    console.error('خطأ في الحصول على المشروع:', error);
    res.status(500).json({ message: 'حدث خطأ أثناء الحصول على المشروع' });
  }
});

// إنشاء مشروع جديد
app.post('/api/projects', async (req, res) => {
  const newProject = {
    id: uuidv4(),
    timestamp: new Date().toISOString(),
    status: 'new',
    ...req.body
  };
  
  try {
    // إضافة المشروع إلى Firestore
    const docRef = await db.collection('projects').add(newProject);
    newProject.id = docRef.id;
    res.status(201).json(newProject);
  } catch (error) {
    console.error('خطأ في إضافة المشروع إلى Firestore:', error);
    res.status(500).json({ message: 'حدث خطأ أثناء حفظ المشروع' });
  }
});

// تحديث مشروع
app.patch('/api/projects/:id', async (req, res) => {
  try {
    const projectDoc = await db.collection('projects').doc(req.params.id).get();
    if (!projectDoc.exists) {
      return res.status(404).json({ message: 'المشروع غير موجود' });
    }
    
    // تحديث المشروع في Firestore
    await db.collection('projects').doc(req.params.id).update(req.body);
    const updatedProject = await db.collection('projects').doc(req.params.id).get();
    res.json(updatedProject.data());
  } catch (error) {
    console.error('خطأ في تحديث المشروع:', error);
    res.status(500).json({ message: 'حدث خطأ أثناء تحديث المشروع' });
  }
});

// حذف مشروع
app.delete('/api/projects/:id', async (req, res) => {
  try {
    const projectDoc = await db.collection('projects').doc(req.params.id).get();
    if (!projectDoc.exists) {
      return res.status(404).json({ message: 'المشروع غير موجود' });
    }
    
    // حذف المشروع من Firestore
    await db.collection('projects').doc(req.params.id).delete();
    res.json({ message: 'تم حذف المشروع بنجاح' });
  } catch (error) {
    console.error('خطأ في حذف المشروع:', error);
    res.status(500).json({ message: 'حدث خطأ أثناء حذف المشروع' });
  }
});

// اختبار الاتصال بـ Firestore
firebaseAdmin.firestore().collection('projects').limit(1).get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('قاعدة البيانات فارغة.');
    } else {
      console.log('تم الاتصال بـ Firebase بنجاح.');
    }
  })
  .catch(error => {
    console.error('خطأ في الاتصال بـ Firebase:', error);
  });

// تشغيل الخادم
app.listen(PORT, () => {
  console.log(`تم تشغيل الخادم على المنفذ ${PORT}`);
});
