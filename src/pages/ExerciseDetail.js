import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData,fetchVideo, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      //const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const exerciseDetailData = await fetchData(`https://fitness-backend.netlify.app/.netlify/functions/api/exercises/exercise/${id}/`);
      setExerciseDetail(exerciseDetailData[0]);
      console.log("exerciseDetailData",exerciseDetailData[0])

       const exerciseVideosData = await fetchVideo(`${youtubeSearchUrl}/search?query=${exerciseDetailData[0].name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`https://fitness-backend.netlify.app/.netlify/functions/api/exercises/target/${decodeURI(exerciseDetailData[0].target)}`);
      console.log("Target muscle are",targetMuscleExercisesData)
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`https://fitness-backend.netlify.app/.netlify/functions/api/exercises/equipment/${decodeURI(exerciseDetailData[0].equipment)}`);
      setEquipmentExercises(equimentExercisesData); 
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
     <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} /> 
    </Box>
  );
};

export default ExerciseDetail;